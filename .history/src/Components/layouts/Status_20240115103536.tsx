import React, { useState} from 'react';

const Status = () => {

    const [activeStatus, setActiveStatus] = useState('');
    const statusData = [
        {
            name: "대기",
            count: 100
        },
        {
            name: "상담",
            count: 100
        },
        {
            name: "확인",
            count: 100
        },
        {
            name: "종료",
            count: 100
        },
    ]

    const onClickStatus = (status: string) => {
        setActiveStatus(status);
    }

    return (
        <div className='statusWrap'>
            <div className="chatStatusWrap">
                <ul className='statusList'>
                    {statusData.map((status) => (
                        <li className='status' onClick={() => onClickStatus(status.name)}>
                            <p>{activeStatus}</p>
                            <em className={activeStatus == activeStatus? 'active' : ''}>{status.count}</em>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="myStatusWrap"></div>
        </div>
    );
};

export default Status;