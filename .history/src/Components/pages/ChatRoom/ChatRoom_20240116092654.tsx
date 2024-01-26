import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import Room from './Room';
import search from '../../../assets/images/icons/search.svg';
import user from '../../../assets/images/user.png';
import { postChatRoomList } from './slices/chatRoomSlice';

const ChatRoom = () => {

    const dispatch = useAppDispatch();
    const { devicekey, uid } = useAppSelector((state) => state.login);
    const chatList = useAppSelector((state) => state.chatRoom.data);
    const { selectedStatus } = useAppSelector((state) => state.status);

    useEffect(() => {
        if(devicekey !== '') {
            dispatch(postChatRoomList(devicekey));
        }
    },[devicekey]);

    const lastTimeTrans = (unixtime: number) => {
        const unixtime = new Date(room.ROOM_LAST_UNIXTIME);
                            const now = new Date();
                            let lastDate;
                            let ampm;

                            if (
                                now.getFullYear() === unixtime.getFullYear() &&
                                now.getMonth() === unixtime.getMonth() &&
                                now.getDate() === unixtime.getDate()
                              ) {
                                let hour = unixtime.getHours();
                            
                                if (unixtime.getHours() < 12) {
                                  ampm = '오전';
                                } else {
                                  if (unixtime.getHours() > 12) {
                                    hour = unixtime.getHours() - 12;
                                  }
                                  ampm = '오후';
                                }
                                lastDate = `${ampm} ${hour.toString().padStart(2, '0')} ${unixtime.getMinutes().toString().padStart(2, '0')}`;
                              } else {
                                lastDate = `${(unixtime.getMonth() + 1).toString().padStart(2, '0')}월 ${unixtime.getDate().toString().padStart(2, '0')}일`;
                              }
    }

    return (
        <div className='chatRoom'>
            <div className="roomListWrap">
                <div className='roomList'>
                    <div className='listHeader'>
                        <p>{selectedStatus.name} 목록 <i>{selectedStatus.count}</i></p>
                        <div className="roomSearchWrap">
                            <input type="text" placeholder='검색' />
                            <button className='roomSearch'><img src={search} alt="" /></button>
                        </div>
                    </div>
                    <div className="roomWrapScroll">
                    {chatList ?
                        chatList.map((room) => {
                            const myRoom = room.MEMBER.find((member) => member.UID == uid);

                            const unixtime = new Date(room.ROOM_LAST_UNIXTIME);
                            const now = new Date();
                            let lastDate;
                            let ampm;

                            if (
                                now.getFullYear() === unixtime.getFullYear() &&
                                now.getMonth() === unixtime.getMonth() &&
                                now.getDate() === unixtime.getDate()
                              ) {
                                let hour = unixtime.getHours();
                            
                                if (unixtime.getHours() < 12) {
                                  ampm = '오전';
                                } else {
                                  if (unixtime.getHours() > 12) {
                                    hour = unixtime.getHours() - 12;
                                  }
                                  ampm = '오후';
                                }
                                lastDate = `${ampm} ${hour.toString().padStart(2, '0')} ${unixtime.getMinutes().toString().padStart(2, '0')}`;
                              } else {
                                lastDate = `${(unixtime.getMonth() + 1).toString().padStart(2, '0')}월 ${unixtime.getDate().toString().padStart(2, '0')}일`;
                              }

                            return (
                                <div className="roomWrap" key={room.ROOM_KEY}>
                                    <div className="consumerWrap">
                                        <div className="consumerInfo">
                                            <img className='profile' src={user} alt="" />
                                            <em className='name'>{myRoom?.ROOM_NAME}</em>
                                        </div>
                                        <p className='lastChat'>{room.ROOM_LAST_MSG}</p>
                                    </div>
                                    <div className="roomInfo">
                                        <p className='lastTime'>{lastDate}</p>
                                        {myRoom!.UNREAD_CNT > 0 ? 
                                            <div className='bedge'><p>{myRoom?.UNREAD_CNT}</p></div>
                                         : null}
                                    </div>
                                </div>
                             );
                        }) : <p>대화를 시작해 보세요!</p>
                    }
                    </div>
                </div>
            </div>
            <Room />
        </div>
    );
};

export default ChatRoom;