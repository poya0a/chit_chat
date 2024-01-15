import React from 'react';

const Status = () => {
    return (
        <div className='statusWrap'>
            <div className="chatStatusWrap">
                <ul className='statusList'>
                    <li className='status'>
                        <p>대기</p>
                        <em>100</em>
                    </li>
                </ul>
            </div>
            <div className="myStatusWrap"></div>
        </div>
    );
};

export default Status;