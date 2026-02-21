import { Injectable } from '@nestjs/common';
import { randomUUID, UUID } from 'node:crypto';
@Injectable()
export class ProfilesService {
  private profiles = [
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

  findAll() {
    return this.profiles;
  }

  findOne(id: UUID) {
    return this.profiles.find((profile) => profile.id === id);
  }

  create(name: string, description: string) {
    const newProfile = {
      id: randomUUID(),
      name,
      description,
    };

    this.profiles.push(newProfile);
    return newProfile;
  }

  update(id: UUID, name: string, description: string) {
    const profileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );
    if (profileIndex === -1) {
      return null;
    }
    const updatedProfile = {
      id,
      name,
      description,
    };
    this.profiles[profileIndex] = updatedProfile;
    return updatedProfile;
  }

  remove(id:UUID){
    // this.profiles = this.profiles.filter(profile => profile.id !== id);
    const profileIndex = this.profiles.findIndex(profile => profile.id === id);

    if(profileIndex > -1){
        this.profiles.splice(profileIndex,1);
    }
  }
}
