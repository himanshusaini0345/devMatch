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
    const profileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );
    if (profileIndex === -1) {
      throw new NotFoundException();
    }
    const updatedProfile: Profile = {
      id,
      name,
      description,
    };
    this.profiles[profileIndex] = updatedProfile;
    return updatedProfile;
  }

  remove(id: UUID): void {
    // this.profiles = this.profiles.filter(profile => profile.id !== id);
    const profileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );

    if (profileIndex > -1) {
      this.profiles.splice(profileIndex, 1);
    }
  }
}
