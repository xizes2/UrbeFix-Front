import jwt from "jwt-decode";

const fetchToken = (token: string) => {
  const payloadToken: {
    userEmail: string;
    id: string;
    iat: string;
  } = jwt(token);

  return {
    userEmail: payloadToken.userEmail,
    token: token,
    id: payloadToken.id,
  };
};

export default fetchToken;
