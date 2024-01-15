import { Outlet, useLocation } from 'react-router-dom';
import LoadingSpinner from '../common/LoadingSpinner';


const Layout = () => {
    const { pathname } = useLocation();
    return (
        <>
      <LoadingSpinner />
      <main>
        <Outlet />
      </main>
    </>
    );
};

export default Layout;