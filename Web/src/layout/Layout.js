
import { Outlet } from "react-router-dom";
import './Layout.scss';
import Header from "./Header";

import NavContainerLeft from "./NavContainerLeft";
const Layout = () => {
    return (
        <main className="d-flex flex-column pe-lg-4 ps-2 ps-lg-0 pe-2">
            <Header />
            <div className="d-flex z-index0">
                <NavContainerLeft />
                <div className="_outlet rounded-4 flex-fill">
                    <Outlet />
                </div>
            </div>
        </main>
    );
}

export default Layout;
