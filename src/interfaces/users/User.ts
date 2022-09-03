export interface UnregisteredUser {
  firstName: string;
  firstSurname: string;
  profileImage?: string;
  userEmail: string;
  password: string;
}

export interface RegisteredUser {
  userEmail: string;
  token: string;
  id: string;
}

export interface LoginData {
  userEmail: string;
  password: string;
}

export interface UserToken {
  token: string;
}
