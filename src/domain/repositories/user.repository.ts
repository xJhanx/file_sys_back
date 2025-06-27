import { UserModel } from '../models/user/UserModel';
import { CreateUserModel } from '../models/user/createUser.model';
import { UpdateUserModel } from '../models/user/updateUser.model';

export interface  UserRepository {
  create(user : CreateUserModel) : Promise<void>;
  update(user : UpdateUserModel) : Promise<void>;
  findByEmail(email : string) : Promise<UserModel | null>;
}