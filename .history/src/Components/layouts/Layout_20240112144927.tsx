import React from 'react';

const Layout = () => {
    return (
        <>
      <Header />
      <LoadingSpinner />
      <main style={{ paddingBottom: footerNavPaths.includes(pathname) ? '80px' : '55px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
    );
};

export default Layout;