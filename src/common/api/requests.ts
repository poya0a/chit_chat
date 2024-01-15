type Requests = {
  [key: string]: string;
};

const requests: Requests = {
  PUBLIC_KEY: '/api/user/auth/issuedKey',
  REFRESH_TOKEN: '/api/user/auth/refreshToken',
};

export default requests;
