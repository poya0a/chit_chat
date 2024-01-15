import React, { useEffect, useState} from 'react';
import questionMark from '../../assets/images/icons/questionmark.svg';
import user from '../../assets/images/user.png';
import arrow from '../../assets/images/icons/arrowUp.svg';

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

    useEffect(() => {
        setActiveStatus(statusData[1].seq);
    },[]);

    const onClickStatus = (status: number) => {
        setActiveStatus(status);
    }

    return (
        <div className='statusWrap'>
            <div className="chatStatusWrap">
                <ul className='statusList'>
                    {statusData.map((status) => (
                        <li className='status' onClick={() => onClickStatus(status.seq)} key={status.seq}>
                            <p>{status.name}</p>
                            <em className={activeStatus == status.seq? 'active' : ''}>{status.count}</em>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="myStatusWrap">
                <button className='questionButton'>
                    <img src={questionMark} alt="" />
                </button>
                <div className="statusInfoWrap">
                    <div className="info">
                        <img src={user} alt="" />
                        <p>TEST USER</p>
                    </div>
                    <button className="statusButton">
                        <p>상담</p>
                        <img src={arrow} alt="" className='arrowDown'/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Status;