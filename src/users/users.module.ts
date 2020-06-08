import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './users.controller';
import { userProviderToken } from './tokens/users.provider-token';
import { UserService } from './users.service';
import { userProvider } from './providers/users.provider';

@Module({
  imports: [ DatabaseModule ],
  controllers: [ UserController ],
  providers: [
    {
      provide: userProviderToken,
      useClass: UserService,
    }, 
    userProvider,
  ],
})
export class UserModule {}