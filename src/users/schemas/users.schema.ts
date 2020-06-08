import * as mongoose from 'mongoose';

export const userSchema: any = new mongoose.Schema({
  name: String,
  lastName: String,
  age: Number,
});