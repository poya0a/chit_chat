import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/store";
import storage from "@utils/storage";
import Room from "./Room";
import search from "@assets/images/icons/search.svg";
import user from "@assets/images/user.png";
import { postChatList, postChatRoomList } from "./chatRoomSlice";
import { ChatList } from "./chatRoom.interface";

const ChatRoom = () => {
  const dispatch = useAppDispatch();
  const { chatList } = useAppSelector((state) => state.chatRoom);
  const { selectedStatus } = useAppSelector((state) => state.status);
  const uid = storage.getStorage("user-uid");

  useEffect(() => {
    dispatch(postChatRoomList());
    const getRoomKey = storage.getStorage("room-key");
    if (getRoomKey) {
      dispatch(postChatList());
    }
  }, []);

  const lastTimeTrans = (unixtime: number) => {
    const lastTime = new Date(unixtime);
    const now = new Date();
    let ampm;

    if (
      now.getFullYear() === lastTime.getFullYear() &&
      now.getMonth() === lastTime.getMonth() &&
      now.getDate() === lastTime.getDate()
    ) {
      let hour = lastTime.getHours();

      if (lastTime.getHours() < 12) {
        ampm = "오전";
      } else {
        if (lastTime.getHours() > 12) {
          hour = lastTime.getHours() - 12;
        }
        ampm = "오후";
      }
      return `${ampm} ${hour.toString().padStart(2, "0")} ${lastTime
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
    } else {
      return `${(lastTime.getMonth() + 1)
        .toString()
        .padStart(2, "0")}월 ${lastTime
        .getDate()
        .toString()
        .padStart(2, "0")}일`;
    }
  };

  const onClickRoom = (roomKey: string) => {
    const getRoomKey = storage.getStorage("room-key");
    if (getRoomKey !== roomKey) {
      storage.setStorage("room-key", roomKey);
      dispatch(postChatList());
    }
  };

  return (
    <section className="ChatRoom">
      <div className="ChatRoom_wrapper">
        <div className="room_list">
          <div className="list_header">
            <p>
              {selectedStatus.name} 목록 <i>{selectedStatus.count}</i>
            </p>
            <div className="ChatRoom_search">
              <input type="text" placeholder="검색" />
              <button className="search">
                <img src={search} alt="" />
              </button>
            </div>
          </div>
          <div className="ChatRoom_list">
            {chatList ? (
              chatList.map((room: ChatList, index: number) => {
                const myRoom = room.MEMBER.find((member) => member.UID == uid);
                const lastTime = lastTimeTrans(room.ROOM_LAST_UNIXTIME);
                return (
                  <div
                    className={
                      storage.getStorage("room-key") === room.ROOM_KEY
                        ? "ChatRoom_item active"
                        : "ChatRoom_item"
                    }
                    key={`chat_room_${index}`}
                    onClick={() => onClickRoom(room.ROOM_KEY)}
                  >
                    <div className="ChatRoom_profile">
                      <div className="consumerInfo">
                        <img className="profile" src={user} alt="" />
                        <em className="name">{myRoom?.ROOM_NAME}</em>
                      </div>
                      <p className="lastChat">
                        {decodeURIComponent(room.ROOM_LAST_MSG)}
                      </p>
                    </div>
                    <div className="ChatRoom_info">
                      <p className="lastTime">{lastTime}</p>
                      {myRoom && myRoom!.UNREAD_CNT > 0 ? (
                        <div className="bedge">
                          <p>{myRoom?.UNREAD_CNT}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })
            ) : (
              <p>대화를 시작해 보세요!</p>
            )}
          </div>
        </div>
      </div>
      <Room />
    </section>
  );
};

export default ChatRoom;
