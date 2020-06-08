import { Controller, Inject, Get, Param, Post, Body } from '@nestjs/common';
import { userProviderToken } from './tokens/users.provider-token';
import { UserService } from './users.service';
import { IUser } from './interfaces/users.interface';

@Controller('users') 
export class UserController {
  constructor(@Inject(userProviderToken) public userService: UserService) {}

  @Post('add') // http://localhost:3000/users/add
  public addUser(@Body() body: IUser ) {
    return this.userService.addUser(body);
  }

  @Get(':id') // http://localhost:3000/users/id
  public getUser(@Param('id') id: string ) {
    return this.userService.getUserById(id);
  }

  @Get() // http://localhost:3000/users
  public getAllUsers() {
    return this.userService.getAllUsers();
  }
}