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
    member: string;
    roomKey: string;
    roomLastChatType: string;
    roomLastMsg: string;
    roomLastUnixtime: number;
    roomType: string;

    final List<Member> member;
    final String roomKey;
    final String roomLastChatType;
    String roomLastMsg;
    int roomLastUnixtime;
    final String roomType;
}

export type { Member, ChatList };