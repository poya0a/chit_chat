import React from 'react';

const Status = () => {

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

    return (
        <div className='statusWrap'>
            <div className="chatStatusWrap">
                <ul className='statusList'>
                    {statusData.map((status) => (
                        <li className='status'>
                            <p>{status.name}</p>
                            <em>{status.count}</em>
                        </li>
                    ))}
                    
                </ul>
            </div>
            <div className="myStatusWrap"></div>
        </div>
    );
};

export default Status;