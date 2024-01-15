import { Outlet, useLocation } from 'react-router-dom';
import LoadingSpinner from '../common/LoadingSpinner';
import Menu from './Menu';
import Status from './Status';
import Profile from './Profile';

const Layout = () => {
    const { pathname } = useLocation();
    return (
        <>
        <Menu />
            <LoadingSpinner />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;