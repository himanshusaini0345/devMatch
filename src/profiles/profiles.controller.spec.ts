import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { type UUID } from 'node:crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';

describe('ProfilesController', () => {
  let controller: ProfilesController;
  let profilesService: jest.Mocked<ProfilesService>;

  const profileId = '0f6f5f95-6b39-4b5f-8fef-fc1e6873f6d1' as UUID;
  const profile = {
    id: profileId,
    name: 'John Doe',
    description: 'Sample profile',
  };

  beforeEach(async () => {
    const profilesServiceMock: jest.Mocked<ProfilesService> = {
      findAll: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    } as unknown as jest.Mocked<ProfilesService>;

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfilesController],
      providers: [{ provide: ProfilesService, useValue: profilesServiceMock }],
    }).compile();

    controller = module.get<ProfilesController>(ProfilesController);
    profilesService = module.get(ProfilesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all profiles', () => {
      profilesService.findAll.mockReturnValue([profile]);

      const result = controller.findAll();

      expect(result).toEqual([profile]);
      expect(profilesService.findAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOne', () => {
    it('should return the matching profile', () => {
      profilesService.findOne.mockReturnValue(profile);

      const result = controller.findOne(profileId);

      expect(result).toEqual(profile);
      expect(profilesService.findOne).toHaveBeenCalledWith(profileId);
      expect(profilesService.findOne).toHaveBeenCalledTimes(1);
    });
  });

  describe('create', () => {
    it('should create and return a profile', () => {
      const createDto: CreateProfileDto = {
        name: profile.name,
        description: profile.description,
      };
      profilesService.create.mockReturnValue(profile);

      const result = controller.create(createDto);

      expect(result).toEqual(profile);
      expect(profilesService.create).toHaveBeenCalledWith(
        createDto.name,
        createDto.description,
      );
      expect(profilesService.create).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should update and return a profile', () => {
      const updateDto: UpdateProfileDto = {
        name: 'Jane Smith',
        description: 'Updated description',
      };
      const updatedProfile = { ...profile, ...updateDto };
      profilesService.update.mockReturnValue(updatedProfile);

      const result = controller.update(profileId, updateDto);

      expect(result).toEqual(updatedProfile);
      expect(profilesService.update).toHaveBeenCalledWith(
        profileId,
        updateDto.name,
        updateDto.description,
      );
      expect(profilesService.update).toHaveBeenCalledTimes(1);
    });
  });

  describe('remove', () => {
    it('should remove the matching profile', () => {
      profilesService.remove.mockReturnValue(undefined);

      const result = controller.remove(profileId);

      expect(result).toBeUndefined();
      expect(profilesService.remove).toHaveBeenCalledWith(profileId);
      expect(profilesService.remove).toHaveBeenCalledTimes(1);
    });
  });

  describe('validation pipes (http)', () => {
    let app: INestApplication<App>;

    beforeEach(async () => {
      const profilesServiceMock: jest.Mocked<ProfilesService> = {
        findAll: jest.fn().mockReturnValue([profile]),
        findOne: jest.fn().mockReturnValue(profile),
        create: jest.fn().mockReturnValue(profile),
        update: jest.fn().mockReturnValue(profile),
        remove: jest.fn(),
      } as unknown as jest.Mocked<ProfilesService>;

      const module: TestingModule = await Test.createTestingModule({
        controllers: [ProfilesController],
        providers: [{ provide: ProfilesService, useValue: profilesServiceMock }],
      }).compile();

      app = module.createNestApplication();
      await app.init();

      profilesService = module.get(ProfilesService);
    });

    afterEach(async () => {
      await app.close();
    });

    it('rejects POST /profiles when name is too short', async () => {
      await request(app.getHttpServer())
        .post('/profiles')
        .send({ name: 'Jo', description: 'desc' })
        .expect(400);

      expect(profilesService.create).not.toHaveBeenCalled();
    });

    it('accepts POST /profiles when body is valid', async () => {
      await request(app.getHttpServer())
        .post('/profiles')
        .send({ name: profile.name, description: profile.description })
        .expect(201)
        .expect(profile);

      expect(profilesService.create).toHaveBeenCalledWith(
        profile.name,
        profile.description,
      );
    });

    it('rejects GET /profiles/:id when id is not uuid', async () => {
      await request(app.getHttpServer()).get('/profiles/not-a-uuid').expect(400);

      expect(profilesService.findOne).not.toHaveBeenCalled();
    });

    it('rejects PUT /profiles/:id when body is invalid', async () => {
      await request(app.getHttpServer())
        .put(`/profiles/${profileId}`)
        .send({ name: 'ok', description: 123 })
        .expect(400);

      expect(profilesService.update).not.toHaveBeenCalled();
    });
  });
});
