import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

function App() {
  return (
    
    <div className="wrap">
      <div className="content">
        <AxiosInterceptor>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/not_yet_supported_by_service" element={<NotService />} />
            <Route path="/ticket" element={<NotService />} />
            <Route element={<Layout />}>
              <Route path="/auth/terms" element={<Terms />} />
              <Route path="/auth/join" element={<Join />} />
              <Route path="/auth/find_id" element={<FindId />} />
              <Route path="/auth/find_password" element={<FindPassword />} />
              <Route path="/auth/find_password_reset" element={<FindPasswordReset />} />

              <Route path="/home" element={<Home />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/reservation" element={<Reservation />} />
              {/* <Route path="/ticket" element={<Ticket />} />
              <Route path="/ticket/branch_class" element={<BranchClassDetail />} />
              <Route path="/ticket/class_ticket" element={<ClassTicketDetail />} /> */}
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/mypage/ticket" element={<MyTicket />} />
              <Route path="/mypage/ticket/detail" element={<MyTicketList />} />

              <Route path="/mypage/notice" element={<NoticeList />} />
              <Route path="/mypage/notice/detail" element={<NoticeDetail />} />
              <Route path="/mypage/payment" element={<Payment />} />
              <Route path="/mypage/payment/detail" element={<PaymentTicketDetail />} />
              <Route path="/mypage/password" element={<PasswordVerification />} />
              <Route path="/mypage/modify" element={<Modify />} />
              <Route path="/:detailType/reservation_detail" element={<ReservDetail />} />
            </Route>
            <Route path="/auth/complete" element={<JoinComplete />} />
            <Route path="/search" element={<SearchBranchList />} />
            <Route path="/search/detail" element={<SearchBranchDetail />} />
          </Routes>
        </AxiosInterceptor>
      </div>
    </div>
  );
}

export default App;
