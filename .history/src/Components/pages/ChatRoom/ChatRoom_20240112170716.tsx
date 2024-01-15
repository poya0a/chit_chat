import React from 'react';
import Room from './Room';

const ChatRoom = () => {
    return (
        <div className='chatRoom'>
            <div className="roomListWrap">
                <div className='roomList'>
                    <div className='listHeader'></div>
                </div>
            </div>
            <Room />
        </div>
    );
};

export default ChatRoom;