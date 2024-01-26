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


class ChatList {
    final List<Member> member;
    final String roomKey;
    final String roomLastChatType;
    String roomLastMsg;
    int roomLastUnixtime;
    final String roomType;
  
    ChatList(
      this.member,
      this.roomKey,
      this.roomLastChatType,
      this.roomLastMsg,
      this.roomLastUnixtime,
      this.roomType,
    );
  
    factory ChatList.fromJson(Map<dynamic, dynamic> json) {
      return ChatList(
        (json['MEMBER'] as List<dynamic>)
            .map((userJson) => Member.fromJson(userJson))
            .toList(),
        json['ROOM_KEY'],
        json['ROOM_LAST_CHAT_TYPE'],
        json['ROOM_LAST_MSG'],
        json['ROOM_LAST_UNIXTIME'],
        json['ROOM_TYPE'],
      );
    }
  }

  class Member {
    final String uid;
    final String userName;
    final String roomName;
    final String roomEmoji;
    final String roomNameChange;
    final String roomEmojiChange;
    final int roomEntraceDate;
    final String lastReadMsg;
    final int lastUnixtime;
    int unreadCnt;
  
    Member(
        this.uid,
        this.userName,
        this.roomName,
        this.roomEmoji,
        this.roomNameChange,
        this.roomEmojiChange,
        this.roomEntraceDate,
        this.lastReadMsg,
        this.lastUnixtime,
        this.unreadCnt);
  
    Map<String, dynamic> toJson() {
      return {
        'uid': uid,
        'userName': userName,
        'roomName': roomName,
        'roomEmoji': roomEmoji,
        'roomNameChange': roomNameChange,
        'roomEmojiChange': roomEmojiChange,
        'roomEntraceDate': roomEntraceDate,
        'lastReadMsg': lastReadMsg,
        'lastUnixtime': lastUnixtime,
        'unreadCnt': unreadCnt,
      };
    }
  
    factory Member.fromJson(Map<String, dynamic> json) {
      return Member(
        json['UID'],
        json['USER_NAME'],
        json['ROOM_NAME'],
        json['ROOM_EMOJI'],
        json['ROOM_NAME_CHG'],
        json['ROOM_EMOJI_CHG'],
        json['ROOM_ENTRANCE_DATE'],
        json['LAST_READ_MSG'],
        json['LAST_UNIXTIME'],
        json['UNREAD_CNT'] ?? 0,
      );
    }
  }