import React from 'react';
import Room from './Room';

const ChatRoom = () => {
    return (
        <div className='chatRoom'>
            <div className="roomList">
                <div className='rooms'></div>
            </div>
            <Room />
        </div>
    );
};

export default ChatRoom;