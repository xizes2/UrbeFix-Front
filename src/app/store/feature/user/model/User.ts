export interface UnregisteredUser {
  userName: string;
  userEmail: string;
  password: string;
  image: string;
}

export interface RegisteredUser {
  id: string;
  userName: string;
  userEmail: string;
  token: string;
  image: string;
}
