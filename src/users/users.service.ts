import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { userModelToken } from './tokens/users.model-token';
import { Model } from 'mongoose';
import { IUser } from './interfaces/users.interface';

@Injectable()
export class UserService {
  constructor(@Inject(userModelToken) private readonly userModel: Model<IUser>) {}

  public addUser(user: IUser) {
    return this.userModel.create(user);
  }

  public async getUserById(id: string) {
    const user = await this.userModel.findOne( { _id: id } ).lean().exec();
    
    if (!user) throw new BadRequestException(`User with following id: ${id} does not exist`);

    return await this.userModel.aggregate( [ 
      {
        $match: { ...user }
      },
      {
        $lookup: { 
          from: "carmodels",
          localField: "_id",
          foreignField: "userId",
          as: "cars"
        }
      }
    ] );
  }

  public getAllUsers() {
    return this.userModel.aggregate( [ 
      { 
        $lookup: { 
          from: "carmodels", 
          localField: "_id", 
          foreignField: "userId", 
          as: "cars" 
        } 
      } 
    ] );
  }
}