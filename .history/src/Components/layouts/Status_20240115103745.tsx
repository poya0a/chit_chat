import React, { useState} from 'react';

const Status = () => {

    const [activeStatus, setActiveStatus] = useState(0);
    const statusData = [
        {
            seq: 1,
            name: "대기",
            count: 100
        },
        {
            seq: 2,
            name: "상담",
            count: 100
        },
        {
            seq: 3,
            name: "확인",
            count: 100
        },
        {
            seq: 4,
            name: "종료",
            count: 100
        },
    ]

    const onClickStatus = (status: number) => {
        setActiveStatus(status);
    }

    return (
        <div className='statusWrap'>
            <div className="chatStatusWrap">
                <ul className='statusList'>
                    {statusData.map((status) => (
                        <li className='status' onClick={() => onClickStatus(status.seq)} key={status.seq}>
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