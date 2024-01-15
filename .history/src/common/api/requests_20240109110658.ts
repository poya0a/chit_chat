// export const baseUrl: string | undefined = process.env.REACT_APP_API_ROOT;

type Requests = {
  [key: string]: string;
};

const requests: Requests = {
  PUBLIC_KEY: '/api/user/auth/issuedKey',
  REFRESH_TOKEN: '/api/user/auth/refreshToken',
  LOGIN: '/api/user/auth/login',
  LOGOUT: '/api/user/auth/logout',
  JOIN: '/api/user/createUser.do',
  FIND_ID: '/api/user/findId',
  FIND_PASSWORD: '/api/user/passwordInfo',
  RESET_PASSWORD: '/api/user/resetPassword',
  NEWS: '/api/news?currentPageNo=',
  NOTICE: '/api/notice?currentPageNo=',
  EVENT: '/api/alliance-event?currentPageNo=',
  TERMS: '/api/terms/getList.do',
  TERMS_DETAIL: '/api/terms/detail.do?termSeq=',
  PASSWORD_RECONFIRM: '/api/user/auth/reconfirmPassword.do',
  BRANCH_CLASS_LIST: '/api/user/ticket/getBranchClassList.do',
  TICKET: '/api/ticket/getFranTicketList.do',
  MEMBER_TICKET: '/api/user/reser/getMbrTicketList.do',
  BRANCH_TICKET_LIST: '/api/user/ticket/getBranchTicketList.do',
  CERTIFICATION_CODE: '/api/user/certificationCode',
  CHECK_CERTIFICATION_CODE: '/api/user/checkCertificationCode',
  DUPLICATION_EMAIL: '/api/user/emailCheck',
  DUPLICATION_ID: '/api/user/idCheck',
  HOME_USER_INFORMATION: '/api/user/detail.do',
  HOME_USER_GET_QRCODE: '/api/user/main/createMobileEnterance.do',
  HOME_MY_BRANCH_LIST: '/api/user/main/getHomeMyBranchList.do',
  HOME_MY_RESERVE_INFO_LIST: '/api/user/reser/getMyReserInfo.do',
  HOME_MY_TICKET_LIST: '/api/user/main/getMyTicketList.do',
  SEARCH_HOME_BRANCH_LIST: '/api/user/main/searchHomeBranchList.do',
  SEARCH_HOME_BRANCH_DETAIL: '/api/user/main/searchHomeBranchDetail.do',
  SEARCH_HOME_BRANCH_RELATION: '/api/user/main/setBranchMbrRelation',
  BRANCH_LIST: '/api/user/common/getBranchList.do?keyword=',
  CLASS_TICKET_LIST: '/api/user/ticket/getClassTicketList.do?classSeq=',
  BUY_TICKET: '/api/user/ticket/buyTicket.do',
  MY_DETAIL_INFO: '/api/user/my/getMyDetailInfo.do',
  MY_INFO_UPDATE: '/api/user/my/myInfoUpdate.do',
  PASSWORD_UPDATE: '/api/user/my/passwordUpdate.do',
  MY_TICKET_LIST: '/api/user/my/getMyBranchTicketCntList.do',
  MY_TICKET_DETAIL: '/api/user/my/getMyBranchTicketList.do',
  NOTICE_LIST: '/api/user/notice/noticeList.do',
  NOTICE_DETAIL: '/api/user/notice/notice/noticeDetail.do',
  BRANCH_LECTURE_LIST: '/api/user/reser/getBranLctrList.do',
  RESERV_LECTURE_SCHEDULE: '/api/user/reser/getLctSchlList.do',
  SAVE_RESERV: '/api/user/reser/saveClassReser.do',
  GET_MONTH_SCHEDULE: '/api/user/schedule/getMonthSchlList.do',
  CANCLE_RESERV: '/api/user/schedule/saveClassReserCancel.do'
};

export default requests;
