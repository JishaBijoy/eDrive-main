
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LeftNavSubMenuList = ({ list, listName }) => {
    return (



        <div className="d-flex flex-column _ft14">
            {
                list?.map((item, key) => (

                    <a key={`listName${key}`} className="d-flex py-1 mb-1 text-decoration-none px-2">

                        <FontAwesomeIcon icon="bookmark" className="me-2 my-auto rotate90 _ft12" /> {item?.menu}
                    </a>

                ))
            }
        </div>
    );
}

export default LeftNavSubMenuList;