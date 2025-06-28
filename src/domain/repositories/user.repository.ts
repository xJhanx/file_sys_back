import { UserModel } from '../models/user/user.model';
import { CreateUserModel } from '../models/user/create-user.model';
import { UpdateUserModel } from '../models/user/update-user.model';

export interface  UserRepository {
  create(user : CreateUserModel) : Promise<void>;
  update(user : UpdateUserModel) : Promise<void>;
  findByEmail(email : string) : Promise<UserModel | null>;
  findById(id : number) : Promise<UserModel | null>;
}