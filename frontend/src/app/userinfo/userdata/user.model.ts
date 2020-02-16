export interface UserModel<Type> {
  id: string;
  userName: string;
  email: string;
  details: Type;
}
