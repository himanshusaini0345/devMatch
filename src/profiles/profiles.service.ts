import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID, UUID } from 'node:crypto';

type Profile = {
  id: UUID;
  name: string;
  description: string;
};

@Injectable()
export class ProfilesService {
  private profiles: Profile[] = [
    {
      id: randomUUID(),
      name: 'John Doe',
      description: 'A sample profile',
    },
    {
      id: randomUUID(),
      name: 'Jane Smith',
      description: 'Another sample profile',
    },
    {
      id: randomUUID(),
      name: 'Alice Johnson',
      description: 'Yet another sample profile',
    },
  ];

  findAll(): Profile[] {
    return this.profiles;
  }

  findOne(id: UUID): Profile {
    const matchingProfile = this.profiles.find((profile) => profile.id === id);
    if (!matchingProfile) {
      throw new NotFoundException(`Profile with id: ${id} not found.`);
    }
    return matchingProfile;
  }

  create(name: string, description: string): Profile {
    const newProfile: Profile = {
      id: randomUUID(),
      name,
      description,
    };

    this.profiles.push(newProfile);
    return newProfile;
  }

  update(id: UUID, name: string, description: string): Profile {
    const matchingProfileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );
    if (matchingProfileIndex === -1) {
      throw new NotFoundException(`Profile with id: ${id} not found.`);
    }
    const updatedProfile: Profile = {
      id,
      name,
      description,
    };
    this.profiles[matchingProfileIndex] = updatedProfile;
    return updatedProfile;
  }

  remove(id: UUID): void {
    const matchingProfileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );

    if (matchingProfileIndex <= -1) {
      throw new NotFoundException(`Profile with id: ${id} not found.`);
    }

    this.profiles.splice(matchingProfileIndex, 1);
  }
}
