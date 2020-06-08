import { carModelToken } from '../tokens/cars.model-token';
import { Connection, Model, Document } from 'mongoose';
import { carSchema } from '../schemas/cars.schema';
import { databaseConnectionToken } from '../../database/tokens/database.connection-token';

export const carProvider: any = {
  provide: carModelToken,
  useFactory: (connection: Connection): Model<Document> => connection.model('carModel', carSchema),
  inject: [ databaseConnectionToken ],
}