import { Exclude } from 'class-transformer';

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
}

export class SerializedUser {
  id: number;
  username: string;

  @Exclude()
  email: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}
