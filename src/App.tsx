import React, { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import storage from "@utils/storage";

import Login from "@components/pages/Login/Login";
import Layout from "@components/layouts/Layout";
import ChatRoom from "@components/pages/ChatRoom/ChatRoom";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const authPaths = [
    "/auth/terms",
    "/auth/join",
    "/auth/find_id",
    "/auth/find_password",
    "/auth/find_password_reset",
    "/auth/complete",
  ];

  useEffect(() => {
    const checkTokenAndNavigate = async () => {
      const userUid = await storage.getUid();
      if (!userUid) {
        navigate("/login");
      }
    };
    if (authPaths.includes(pathname)) {
      return;
    } else {
      checkTokenAndNavigate();
    }
  }, []);

  return (
    <div className="wrap">
      <div className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<ChatRoom />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
