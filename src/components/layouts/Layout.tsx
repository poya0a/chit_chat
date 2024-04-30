import { Outlet, useLocation } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";
import Menu from "./Menu";
import Status from "./Status";
import Profile from "./Profile";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="Layout">
      <Menu />
      <div className="Layout_wrapper">
        <Status />
        <LoadingSpinner />
        <div className="Main">
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
