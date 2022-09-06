export interface IUnregisteredUser {
  firstName: string;
  firstSurname: string;
  profileImage?: string;
  userEmail: string;
  password: string;
}

export interface IRegisteredUser {
  userEmail: string;
  token: string;
  id: string;
}

export interface ILoginData {
  userEmail: string;
  password: string;
}

export interface IUserToken {
  user: { token: string };
}
