type Requests = {
  [key: string]: string;
};

const requests: Requests = {
  TERMS: "/api/auth/terms",
  EMAIL_DUPLICATE: "/api/auth/duplicate/email",
  SEARCH_COMPANY: "/api/auth/company",
  COMPANY_DUPLICATE: "/api/auth/duplicate/company",
  CREATE_COMPANY: "/api/auth/create/company",
  SEARCH_DEPT: "/api/auth/dept",
  DEPT_DUPLICATE: "/api/auth/duplicate/dept",
  CREATE_DEPT: "/api/auth/craete/dept",
  AUTHENTICATION: "/api/auth/authentication",
  RESEND: "/api/auth/resend",
  LOGIN: "/api/login",
  LOGOUT: "/api/logout",
  AUTH: "/api/auth",
  USER_INFO: "/api/userinfo",
  COMPANY_INFO: "/api/auth/userCompany",
  USER_LIST: "/api/emp/list",
  ROOM_MAKE: "/api/rooms/make",
  ROOM_LIST: "/api/rooms/myrooms",
  CHAT_LIST: "/api/chats/msglist",
  ROOM_PUSH: "/api/rooms/push",
  ROOM_PULL: "/api/rooms/pull",
  ROOM_EDIT: "/api/rooms/edit",
  UPLOAD_FILE: "/api/upload/",
  UPDATE_PROFILE: "/api/profile/update",
  GET_FILE: "/api/file/",
  FILE_INFO: "/api/fileinfo",
  STATE: "/api/auth/emps/state",
  STATUS: "/api/auth/emps/status",
  PROFILE: "/api/auth/emps/profile",
  PWD_UPDATE: "/api/auth/emps/pwdUpdate",
};

export default requests;
