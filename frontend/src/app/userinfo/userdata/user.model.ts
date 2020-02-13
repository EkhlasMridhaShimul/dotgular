export interface UserModel<Type> {
  userName: string;
  email: string;
  details: Type;
}
