import jwt from "jwt-decode";

export const fetchToken = (token: string) => {
  const payloadToken: {
    userEmail: string;
    id: string;
  } = jwt(token);

  return {
    userEmail: payloadToken.userEmail,
    token: token,
    id: payloadToken.id,
  };
};
