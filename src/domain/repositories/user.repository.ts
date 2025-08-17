import { UserModel } from '../models/user/user.model';

export interface  UserRepository {
  create(user : UserModel) : Promise<void>;
  update(user : UserModel) : Promise<void>;
  findByEmail(email : string) : Promise<UserModel | null>;
  findById(id : number) : Promise<UserModel | null>;
}