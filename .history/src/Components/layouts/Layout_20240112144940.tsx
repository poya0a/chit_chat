import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LoadingSpinner from '../common/LoadingSpinner';

const Layout = () => {
    const { pathname } = useLocation();
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