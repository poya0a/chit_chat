import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setChatStatus, setSelectedChatStatus } from "./slices/statusSlice";
import questionMark from "../../assets/images/icons/questionmark.svg";
import user from "../../assets/images/user.png";
import arrow from "../../assets/images/icons/arrowUp.svg";

const Status = () => {
  const dispatch = useAppDispatch();
  const { statusData, selectedStatus } = useAppSelector(
    (state) => state.status
  );
  const [myStatus, setMyStatus] = useState("");
  const [arrowDirection, setArrowDirection] = useState(false);

  const selectStatusData = [
    {
      code: "work",
      name: "상담",
    },
    {
      code: "empty",
      name: "비움",
    },
    {
      code: "close",
      name: "종료",
    },
  ];

  useEffect(() => {
    dispatch(setChatStatus());
    setMyStatus(selectStatusData[0].code);
  }, []);

  useEffect(() => {
    if (statusData.length > 0) {
      dispatch(setSelectedChatStatus(statusData[1]));
    }
  }, [statusData]);

  const onClickMyStatus = (status: string) => {
    setMyStatus(status);
    setArrowDirection(false);
  };

  const onClickChangeStatus = () => {
    if (arrowDirection) {
      setArrowDirection(false);
    } else {
      setArrowDirection(true);
    }
  };

  return (
    <section className="Status">
      <div className="Status_chat">
        <ul className="Status_list">
          {statusData.map((status) => (
            <li
              className="Status_item"
              key={status.code}
              onClick={() => dispatch(setSelectedChatStatus(status))}
            >
              <p>{status.name}</p>
              <em
                className={selectedStatus.code === status.code ? "active" : ""}
              >
                {status.count}
              </em>
            </li>
          ))}
        </ul>
      </div>
      <div className="Status_wrapper">
        <button className="question_button">
          <img src={questionMark} alt="" />
        </button>
        <div className="Status_info">
          <div className="info">
            <img src={user} alt="" />
            <p>TEST USER</p>
          </div>
          <button
            className={`Status_button ${myStatus}`}
            onClick={onClickChangeStatus}
          >
            <p>
              {
                selectStatusData.find((status) => status.code === myStatus)
                  ?.name
              }
            </p>
            <img
              src={arrow}
              alt=""
              className={arrowDirection ? "arrow down" : "arrow"}
            />
          </button>
        </div>
        {arrowDirection ? (
          <div className="Status_select">
            <ul className="Status_select_list">
              {selectStatusData.map((status) => (
                <li
                  className="Status_select_item"
                  key={status.code}
                  onClick={() => onClickMyStatus(status.code)}
                >
                  <p>{status.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Status;
