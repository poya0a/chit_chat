import React, { useEffect, useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setChatStatus, setSelectedChatStatus } from './slices/statusSlice';
import questionMark from '../../assets/images/icons/questionmark.svg';
import user from '../../assets/images/user.png';
import arrow from '../../assets/images/icons/arrowUp.svg';

const Status = () => {

    const dispatch = useAppDispatch();
    const { statusData, selectedStatus } = useAppSelector((state) => state.status)
    const [myStatus, setMyStatus] = useState('');
    const [arrowDirection, setArrowDirection] = useState(false);

    
    const selectStatusData = [
        {
            code: 'work',
            name: "상담"
        },
        {
            code: 'empty',
            name: "비움"
        },
        {
            code: 'close',
            name: "종료"
        },
    ]

    useEffect(() => {
        dispatch(setChatStatus());      
        setMyStatus(selectStatusData[0].code);
    },[]);

    useEffect(() => {
    },[selectedStatus]);

    const onClickMyStatus = (status: string) => {
        setMyStatus(status);
        setArrowDirection(false);
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
                        <li className='status' key={status.code} onClick={() => dispatch(setSelectedChatStatus(status))}>
                            <p>{status.name}</p>
                            <em className={selectedStatus.code === status.code? 'active' : ''}>{status.count}</em>
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
                    <button className={`statusButton ${myStatus}`} onClick={onClickChangeStatus}>
                        <p>{ selectStatusData.find((status) => (status.code === myStatus))?.name }</p>
                        <img src={arrow} alt="" className={arrowDirection ? 'arrow down' : 'arrow'}/>
                    </button>
                </div>
                {arrowDirection ?
                    <div className="selectStatusWrap">
                        <ul className='selectStatusList'>
                            {selectStatusData.map((status) => (
                                <li className='selectStatus' key={status.code} onClick={() => onClickMyStatus(status.code)}>
                                    <p>{status.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div> : null
                }
            </div>
        </div>
    );
};

export default Status;