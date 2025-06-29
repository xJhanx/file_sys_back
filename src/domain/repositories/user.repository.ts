import { UserModel } from '../models/user/user.model';
import { CreateUserModel } from '../../aplication/models/user/create-user.model';
import { UpdateUserModel } from '../../aplication/models/user/update-user.model';

export interface  UserRepository {
  create(user : CreateUserModel) : Promise<void>;
  update(user : UpdateUserModel | UserModel) : Promise<void>;
  findByEmail(email : string) : Promise<UserModel | null>;
  findById(id : number) : Promise<UserModel | null>;
}