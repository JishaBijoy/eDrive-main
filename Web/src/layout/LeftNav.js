
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
const LeftNav = ({ menu, setSubMenu }) => {

    const nav = [
        {
            module: "Home",
            moduleID: "home",
            moduleIcon: "home",
            moduleLink: "home"

        },
        {
            name: "Master",
            id: "Master",
            icon: "suitcase",
            link: "master"

        },
        {
            name: "Schedule",
            id: "schedule",
            icon: "calendar-days",
            link: "schedule",

        },
        {
            name: "Reports",
            id: "reports",
            icon: "file-lines",
            link: "reports",

        },
        {
            name: "Settings",
            id: "settings",
            icon: "gear",
            link: "settings"

        }


    ]

    let location = useLocation()
    useEffect(() => {
        debugger
        let ob = location.pathname;
        ob = ob.split('/');
        if (ob.length >= 2) {
            for (let index = 0; index < menu.length; index++) {
                if (ob[1] === menu[index]?.moduleLink) {
                    setSubMenu(menu[index]?.menu);
                    break;
                }
            }
        } else
            setSubMenu(menu[0]);
    }, [menu])

    const selectMenu = (item) => {

        setSubMenu(item)

    }


    return (
        <div className="leftNav-w">
            <div className="pt-5">
                <div>


                    {
                        menu?.map((item, key) => (
                            <NavLink activeclassname="is-active" to={'/' + (item?.moduleLink)} className="d-flex flex-column py-2" key={`navLeft${key}`} onClick={() => selectMenu(item)}>
                                <FontAwesomeIcon icon={item?.moduleIcon} className="mb-1 _ft16" />
                                <span className="text-center">
                                    {item.module}
                                </span>
                            </NavLink>
                        ))
                    }

                </div>

            </div>

        </div>
    );
}

export default LeftNav;