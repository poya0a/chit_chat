interface Member {
  UID: string;
  USER_NAME: string;
  ROOM_NAME: string;
  ROOM_EMOJI: string;
  ROOM_NAME_CHG: string;
  ROOM_EMOJI_CHG: string;
  ROOM_ENTRANCE_DATE: number;
  LAST_READ_MSG: string;
  LAST_UNIXTIME: number;
  UNREAD_CNT: number;
}

interface ChatList {
  MEMBER: [Member];
  ROOM_KEY: string;
  ROOM_LAST_CHAT_KEY: string;
  ROOM_LAST_MSG: string;
  ROOM_LAST_UNIXTIME: number;
  ROOM_TYPE: string;
}

interface Chats {
  CHAT_INDEX: string;
  CHAT_TYPE: string;
  FILES?: string[];
  FILE_DEL_YN?: string;
  IS_SLANG?: string;
  MSG: string;
  READ_MEMBER: string[];
  ROOM_KEY: string;
  UID: string;
  UNREAD: number;
  UNREAD_MEMBER: string[];
  USER_NAME: string;
  WRITER_INFO?: { UID: string; USER_NAME: string };
  WRITE_DATE: string;
  WRITE_UNIXTIME: number;
  UID_CHECK?: boolean;
  DATE_CHECK?: boolean;
  TIME_CHECK?: boolean;
}

interface ChatRoom {
  chatList?: [ChatList];
  chats?: [Chats];
}

export type { Member, ChatList, ChatRoom, Chats };
