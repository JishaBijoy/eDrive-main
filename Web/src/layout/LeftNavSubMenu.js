import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const LeftNavSubMenu = ({subMenu}) => {

    const master = [
        {
            name:"Registration",
            icon:'',
            link: 'registration'
        },
        {
            name:"Course",
            icon:'',
            link: 'course'
        }
    ]


    return (

       

        <div className="l-sub-menu px-3 pt-5 d-none d-lg-block">         

            <div className="d-flex flex-column _ft14">
            {
                subMenu?.menu?.map((item, key) => (
                    <NavLink activeclassname="is-active" to={subMenu.moduleLink+'/' + (item?.menuLink)} className="d-flex py-1 mb-1 text-decoration-none px-2" key={`${item.menuID}navLeft${key}`}>
                  
                        <FontAwesomeIcon icon="bookmark" className="me-2 my-auto rotate90 _ft12" /> {item?.menu}
                    </NavLink>

                ))
            }
        </div>
        </div>
    );
}

export default LeftNavSubMenu;