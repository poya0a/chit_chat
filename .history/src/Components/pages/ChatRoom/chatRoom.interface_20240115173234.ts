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
    MEMBER: [
        Member
    ];
    ROOM_KEY: string;
    ROOM_LAST_CHAT_KEY: string;
    ROOM_LAST_MSG: string;
    ROOM_LAST_UNIXTIME: number;
    ROOM_TYPE: string;
}

interface ChatRoom {
    CHAT_LIST: [
        ChatList
    ]
}
export type { Member, ChatList };