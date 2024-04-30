import React, { useState } from "react";
import { useAppSelector } from "@store/store";
import { Chats } from "./chatRoom.interface";
import storage from "@utils/storage";
import { convertUnixTimeToFormattedDate } from "@utils/comUtils";
import emoji from "@assets/images/icons/emoji.svg";
import upload from "@assets/images/icons/upload.svg";
import capture from "@assets/images/icons/capture.svg";
import send from "@assets/images/icons/send.svg";

const Room = () => {
  const { chats } = useAppSelector((state) => state.chatRoom);

  return (
    <section className="Room">
      <div className="Room_wrapper">
        <div className="Chat">
          {storage.getStorage("room-key")
            ? chats?.map((chat: Chats, index: number) =>
                storage.getStorage("uid") === chat.UID ? (
                  <div className="Chat_wrapper current" key={`chat_${index}`}>
                    <em>
                      {" "}
                      <strong>{chat.UNREAD}</strong>
                    </em>
                    <div className="Chat_content">
                      {decodeURIComponent(chat.MSG)}
                    </div>

                    <div className="Chat_profile">
                      <img src="" alt="" />
                    </div>
                  </div>
                ) : (
                  <div className="Chat_wrapper" key={`chat_${index}`}>
                    <div className="Chat_profile">
                      <img src="" alt="" />
                    </div>
                    <div className="Chat_content">
                      {decodeURIComponent(chat.MSG)}
                    </div>
                    <em>
                      {convertUnixTimeToFormattedDate(chat.WRITE_UNIXTIME)}
                      {chat.UNREAD > 0 && <strong>{chat.UNREAD}</strong>}
                    </em>
                  </div>
                )
              )
            : null}
        </div>
        <div className="Chat_message">
          <div className="Chat_message_wrapper">
            <textarea
              className="message"
              placeholder="메시지를 입력해 주세요."
            />
            <div className="message_tool">
              <button type="button" className="emoji_button">
                <img src={emoji} title="이모지" />
              </button>
              <button type="button" className="upload_button">
                <img src={upload} title="파일 전송" />
              </button>
              <button type="button" className="capture_button">
                <img src={capture} title="캡처" />
              </button>
              <button type="button" className="send_button">
                <img src={send} title="메세지 전송" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Room;
