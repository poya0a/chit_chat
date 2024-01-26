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
        if(devicekey !== '' && CHAT_LIST.length > 0) {
            dispatch(postChatRoomList(devicekey));
        }
    },[devicekey]);

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
                    {CHAT_LIST.length > 0 ? 
                        CHAT_LIST.map((room) => (

                            <div className="roomWrap" key={room.ROOM_KEY}>
                                <div className="consumerWrap">
                                    <div className="consumerInfo">
                                        <img className='profile' src={user} alt="" />
                                        <em className='name'></em>
                                    </div>
                                    <p className='lastChat'>{room.ROOM_LAST_MSG}</p>
                                </div>
                                <div className="roomInfo">
                                    <p className='lastTime'>{room.ROOM_LAST_UNIXTIME}</p>
                                    <div className='bedge'><p>1</p></div>
                                </div>
                            </div>
                        )) : null
                    }
                </div>
            </div>
            <Room />
        </div>
    );
};

export default ChatRoom;