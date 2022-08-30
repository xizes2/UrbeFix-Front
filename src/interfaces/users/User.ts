export interface UnregisteredUser {
  firstName: string;
  lastName: string;
  profileImage: string;
  userEmail: string;
  password: string;
}

export interface RegisteredUser {
  id: string;
  userEmail: string;
  token: string;
}
