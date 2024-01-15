import { Outlet, useLocation } from 'react-router-dom';
import LoadingSpinner from '../common/LoadingSpinner';
import Menu from './Menu';
import Status from './Status';
import Profile from './Profile';

const Layout = () => {
    const { pathname } = useLocation();

    return (
        <div className='layoutWrap'>
            <Menu />
            <div className="layout">
                <Status />
                <LoadingSpinner />
                <div className="layoutWrap">
                <main>
                    <Outlet />
                </main>
                <Profile />
                </div>
                
            </div>
        </div>
    );
};

export default Layout;