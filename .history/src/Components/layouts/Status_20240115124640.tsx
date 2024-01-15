import React, { useEffect, useState} from 'react';
import questionMark from '../../assets/images/icons/questionmark.svg';
import user from '../../assets/images/user.png';
import arrow from '../../assets/images/icons/arrowUp.svg';

const Status = () => {

    const [activeStatus, setActiveStatus] = useState(0);
    const [myStatus, setMyStatus] = useState(0);
    const [arrowDirection, setArrowDirection] = useState(false);
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

    const selectStatusData = [
        {
            seq: 1,
            name: "상담"
        },
        {
            seq: 2,
            name: "자리 비움"
        },
        {
            seq: 3,
            name: "종료"
        },
    ]

    useEffect(() => {
        setActiveStatus(statusData[1].seq);
        setMyStatus(status);
    },[]);

    const onClickStatus = (status: number) => {
        setActiveStatus(status);
    }

    const onClickMyStatus = (status: number) => {
        setMyStatus(status);
    }

    const onClickChangeStatus = () => {
        if(arrowDirection) {
            setArrowDirection(false);
        } else {
            setArrowDirection(true);
        }
    }

    return (
        <div className='statusWrap'>
            <div className="chatStatusWrap">
                <ul className='statusList'>
                    {statusData.map((status) => (
                        <li className='status' key={status.seq} onClick={() => onClickStatus(status.seq)}>
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
                    <button className="statusButton" onClick={onClickChangeStatus}>
                        <p>상담</p>
                        <img src={arrow} alt="" className={arrowDirection ? 'arrow down' : 'arrow'}/>
                    </button>
                </div>
                <div className="selectStatusWrap">
                    <ul className='selectStatusList'>
                        {selectStatusData.map((status) => (
                            <li className='selectStatus' key={status.seq} onClick={() => onClickMyStatus(status.seq)}>
                                <p>{status.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Status;