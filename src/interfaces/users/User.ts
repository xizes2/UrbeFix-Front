export interface UnregisteredUser {
  firstName: string;
  firstSurname: string;
  profileImage?: string;
  userEmail: string;
  password: string;
}

export interface RegisteredUser {
  id: string;
  userEmail: string;
  token: string;
}
