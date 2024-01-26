import React from 'react';
import { useAppSelector } from '../../../store/store';
import Room from './Room';

const ChatRoom = () => {

    const { selectedStatus } = useAppSelector((state) => state.status);
    return (
        <div className='chatRoom'>
            <div className="roomListWrap">
                <div className='roomList'>
                    <div className='listHeader'>
                        <p>{selectedStatus.name} 목록 <i>{selectedStatus.count}</i></p>
                        <div className="roomSearchWrap">
                            <input type="text" />
                            <button className='roomSearch'><img src="" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <Room />
        </div>
    );
};

export default ChatRoom;