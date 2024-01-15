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
            <div className="mainWrap">
            <Status />
            <LoadingSpinner />
            <main>
                <Outlet />
            </main>
            <Profile />
            </div>
        </div>
    );
};

export default Layout;