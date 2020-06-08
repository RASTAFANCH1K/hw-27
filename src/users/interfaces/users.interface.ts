export interface User {
  readonly name: string;
  readonly lastName: string;
  readonly age: number;
};

export interface IUser extends User, Document {}