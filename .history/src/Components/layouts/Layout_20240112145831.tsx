import { Outlet, useLocation } from 'react-router-dom';
import LoadingSpinner from '../common/LoadingSpinner';
import Menu from './Menu';
import Status from './Status';
import Profile from './Profile';

const Layout = () => {
    const { pathname } = useLocation();

    return (
        <div className='layout'>
            <Menu />
            <Status />
            <LoadingSpinner />
            <main>
                <Outlet />
            </main>
            <Profile />
        </div>
    );
};

export default Layout;