import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import { AxiosInterceptor } from './common/api/ax';
import { useAppSelector } from './store/store';

import Home from './components/pages/Home/Home';
import Layout from './components/layouts/Layout';
import ChatRoom from './components/pages/ChatRoom/ChatRoom';

function App() {
  return (
    <div className="wrap">
      <div className="content">
        <AxiosInterceptor>
          <Routes>
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
