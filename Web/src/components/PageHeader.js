import { faArrowLeft, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const PageHeader = ({pageName}) => {
    let navigate = useNavigate();
    return ( 

        <div className="d-flex border-bottom pageHeader">
        <button className="btn border-0 my-auto"onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} className="_ft14"/>
        </button>
        <h6 className="my-auto">{pageName}</h6>  

        
        <Dropdown className="_btnDropdown ms-auto">
            <Dropdown.Toggle variant="_ft12 d-flex align-item-center px-0 border-0" id="pageHeader">
         
            <FontAwesomeIcon icon={faEllipsisVertical} className="m-auto"/>
       
            </Dropdown.Toggle>

            <Dropdown.Menu className="_ft12 shadow-sm">
                <Dropdown.Item >
                     item
                </Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>
    </div>
     );
}
 
export default PageHeader;