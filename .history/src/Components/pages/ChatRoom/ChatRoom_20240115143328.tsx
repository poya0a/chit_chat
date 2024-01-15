import React from 'react';
import { useAppSelector } from '../../../store/store';
import Room from './Room';

const ChatRoom = () => {

    const {selectedStatus} = useAppSelector((state) => state.status);
    return (
        <div className='chatRoom'>
            <div className="roomListWrap">
                <div className='roomList'>
                    <div className='listHeader'>
                        <p>상담 목록 <i>10</i></p>
                        <button className='roomSearch'><i></i></button>
                    </div>
                </div>
            </div>
            <Room />
        </div>
    );
};

export default ChatRoom;