import { userModelToken } from '../tokens/users.model-token';
import { Connection, Model, Document } from 'mongoose';
import { userSchema } from '../schemas/users.schema';
import { databaseConnectionToken } from '../../database/tokens/database.connection-token';

export const userProvider: any = {
  provide: userModelToken,
  useFactory: (connection: Connection): Model<Document> => connection.model('carOwners', userSchema),
  inject: [ databaseConnectionToken ],
}