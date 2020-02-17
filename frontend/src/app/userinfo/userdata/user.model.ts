export interface UserModel<Type> {
  _id?: number;
  userName: string;
  email: string;
  details: Type;
}
