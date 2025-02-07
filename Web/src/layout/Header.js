import { faArrowRightFromBracket, faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";
import { RemoveLocalStorage } from "../localStorage/LocalStorage";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Header = () => {
    const { setAuth } = useContext(AuthContext);
    const menuFun = () => {

        document.body.classList.toggle('menuActive')
    }

    const logoutFun = () => {
        debugger
        RemoveLocalStorage('auth');
        setAuth({})
    }

    return (

        <header className="_m-h d-flex pe-lg-0">
            <div className="_fa-menu d-lg-flex d-none" onClick={() => menuFun()}>
                <FontAwesomeIcon icon={faBars} className="m-auto _ft16" />
            </div>

            <div className="e-drive_logo my-auto">
                <a>
                    <img src="/e-drive.png" />
                </a>
            </div>


            <div className="flex-fill">
                <div className="_search d-flex rounded-3 px-3"></div>
            </div>

            <div className="_faBell rounded-circle d-flex position-relative my-auto me-3">
                <span className="position-absolute rounded-circle">
                    10
                </span>
                <FontAwesomeIcon icon={faBell} className="m-auto" />
            </div>

            <Dropdown className="_logout">
                <Dropdown.Toggle variant="_ft12 w-100 d-flex align-item-center px-0" id="dropdown-basic">
                    <div className="_p-icon d-flex rounded-circle my-auto">
                        <img src="https://www.pngitem.com/pimgs/m/0-6243_user-profile-avatar-scalable-vector-graphics-icon-woman.png" />
                    </div>
                </Dropdown.Toggle>

                <Dropdown.Menu className="_ft12 shadow-sm">
                    <Dropdown.Item  onClick={() => logoutFun()}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className="me-2" /> Logout
                    </Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>

        </header>
    );
}

export default Header;