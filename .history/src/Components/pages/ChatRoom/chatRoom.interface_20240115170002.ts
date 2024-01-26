interface Member {
    uid: string;
    userName: string;
    roomName: string;
    roomEmoji: string;
    roomNameChange: string;
    roomEmojiChange: string;
    roomEntraceDate: number;
    lastReadMsg: string;
    lastUnixtime: number;
    unreadCnt: number;
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