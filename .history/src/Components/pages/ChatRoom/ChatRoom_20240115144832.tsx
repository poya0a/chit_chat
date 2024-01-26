import React from 'react';
import { useAppSelector } from '../../../store/store';
import Room from './Room';
import search from '../../../assets/images/icons/search.svg';

const ChatRoom = () => {

    const { selectedStatus } = useAppSelector((state) => state.status);
    return (
        <div className='chatRoom'>
            <div className="roomListWrap">
                <div className='roomList'>
                    <div className='listHeader'>
                        <p>{selectedStatus.name} 목록 <i>{selectedStatus.count}</i></p>
                        <div className="roomSearchWrap">
                            <input type="text" placeholder='채팅 검색' />
                            <button className='roomSearch'><img src={search} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <Room />
        </div>
    );
};

export default ChatRoom;