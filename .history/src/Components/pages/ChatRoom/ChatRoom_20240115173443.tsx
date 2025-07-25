import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import Room from './Room';
import search from '../../../assets/images/icons/search.svg';
import user from '../../../assets/images/user.png';
import { postChatRoomList } from './slices/chatRoomSlice';

const ChatRoom = () => {

    const dispatch = useAppDispatch();
    const { devicekey } = useAppSelector((state) => state.login);
    const { CHAT_LIST } = useAppSelector((state) => state.chatRoom);
    const { selectedStatus } = useAppSelector((state) => state.status);

    useEffect(() => {
        dispatch(postChatRoomList(devicekey));
    },[]);

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
                    {CHAT_LIST.map((room) => (
                        <div className="roomWrap">
                            <div className="consumerWrap">
                                <div className="consumerInfo">
                                    <img className='profile' src={user} alt="" />
                                    <em className='name'>TEST USER</em>
                                </div>
                                <p className='lastChat'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, neque quos. Ea repudiandae voluptates asperiores at culpa, laudantium eveniet magnam molestiae nemo officiis facilis sint. Itaque rem repellat ipsam esse!</p>
                            </div>
                            <div className="roomInfo">
                                <p className='lastTime'>03월 04일</p>
                                <div className='bedge'><p>1</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Room />
        </div>
    );
};

export default ChatRoom;