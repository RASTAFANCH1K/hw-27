import { ObjectId } from 'mongoose';

export interface Car {
  readonly mark: string;
  readonly model: string;
  readonly price: number;
  readonly userId: ObjectId;
}

export interface ICar extends Car, Document {}