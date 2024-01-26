type Requests = {
  [key: string]: string;
};

const requests: Requests = {
  PUBLIC_KEY: '/api/user/auth/issuedKey',
  REFRESH_TOKEN: '/api/user/auth/refreshToken',
  LOGIN: '/api/login',
  LOGOUT: '/api/logout',
  TERMS: '/api/auth/terms',
  "TERMS"
    "EMAIL_DUPLICATE": '/api/auth/duplicate/email',
    "SEARCH_COMPANY": '/api/auth/company',
    "COMPANY_DUPLICATE": '/api/auth/duplicate/company',
    "CREATE_COMPANY": '/api/auth/create/company',
    "SEARCH_DEPT": '/api/auth/dept',
    "DEPT_DUPLICATE": '/api/auth/duplicate/dept',
    "CREATE_DEPT": '/api/auth/craete/dept',
    "AUTHENTICATION": '/api/auth/authentication',
    "RESEND": '/api/auth/resend',
    
    "AUTH": '/api/auth',
    "USER_INFO": '/api/userinfo',
    "COMPANY_INFO": '/api/auth/userCompany',
    "USER_LIST": '/api/emp/list',
    "ROOM_MAKE": '/api/rooms/make',
    "ROOM_LIST": '/api/rooms/myrooms',
    "CHAT_LIST": '/api/chats/msglist',
    "SEND_MSG": '/api/server/send',
};

export default requests;
