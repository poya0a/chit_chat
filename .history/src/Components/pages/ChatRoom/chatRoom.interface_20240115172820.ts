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
    member: [
        Member
    ];
    roomKey: string;
    roomLastChatType: string;
    roomLastMsg: string;
    roomLastUnixtime: number;
    roomType: string;
}

export type { Member, ChatList };