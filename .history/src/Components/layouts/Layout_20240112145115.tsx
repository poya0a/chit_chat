import { Outlet, useLocation } from 'react-router-dom';
import LoadingSpinner from '../common/LoadingSpinner';
import Status from './Status';
import Menu from './Menu';
import Profile from './Profile';

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