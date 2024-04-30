import React from "react";
import today from "@assets/images/icons/today.svg";
import chat from "@assets/images/icons/chat.svg";
import address from "@assets/images/icons/address.svg";
import more from "@assets/images/icons/more.svg";
import notification from "@assets/images/icons/notifications.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const topMenuList = [
    {
      iamge: today,
      name: "Today",
      path: "/today",
      onClick: () => navigate("/today"),
    },
    { iamge: chat, name: "대화", path: "/", onClick: () => navigate("/") },
    {
      iamge: address,
      name: "주소록",
      path: "/address",
      onClick: () => navigate("/address"),
    },
  ];

  const bottomMenuList = [
    {
      iamge: more,
      name: "더보기",
      path: "/c",
      onClick: () => navigate("/address"),
    },
    {
      iamge: notification,
      name: "알림",
      path: "/notification",
      onClick: () => navigate("/notification"),
    },
  ];
  return (
    <div className="Menu">
      <div className="Menu_Wrapper">
        <div className="Menu_list top">
          {topMenuList.map((item, index: number) => (
            <button
              type="button"
              className={pathname === item.path ? "active" : ""}
              onClick={item.onClick}
              key={`topMenuList_${index}`}
            >
              {" "}
              <img src={item.iamge} title={item.name} />
            </button>
          ))}
        </div>
        <div className="Menu_list bottom">
          {bottomMenuList.map((item, index: number) => (
            <button
              type="button"
              className={pathname === item.path ? "active" : ""}
              onClick={item.onClick}
              key={`bottomMenuList${index}`}
            >
              {" "}
              <img src={item.iamge} title={item.name} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
