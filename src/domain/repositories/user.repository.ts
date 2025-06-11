import { User } from '../models/User';

export interface  UserRepository {
  create(user : User) : Promise<User>;
  update(user : User) : Promise<User>;
  findByEmail(email : string) : Promise<User | null>;
}