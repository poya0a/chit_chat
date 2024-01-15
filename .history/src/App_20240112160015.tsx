import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import { AxiosInterceptor } from './common/api/ax';
import { useAppSelector } from './store/store';

import Home from './Components/pages/Home/Home';
import Layout from './Components/layouts/Layout';

function App() {
  return (
    <div className="wrap">
      <div className="content">
        <AxiosInterceptor>
          <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </AxiosInterceptor>
      </div>
    </div>
  );
}

export default App;
