import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import { AxiosInterceptor } from './common/api/ax';
import { useAppSelector } from './store/store';
import storage from './common/utils/storage';

import Login from './components/pages/Login/Login';
import Home from './components/pages/Home/Home';
import Layout from './components/layouts/Layout';
import ChatRoom from './components/pages/ChatRoom/ChatRoom';


function App() {
  const navigate = useNavigate();
  const { login } = useAppSelector((state) => state.login);
  const userToken = storage.getAccessToken();

  useEffect(() => {
    if (userToken) {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [login, userToken]);

  return (
    <div className="wrap">
      <div className="content">
        <AxiosInterceptor>
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<ChatRoom />} />
            </Route>
          </Routes>
        </AxiosInterceptor>
      </div>
    </div>
  );
}

export default App;
