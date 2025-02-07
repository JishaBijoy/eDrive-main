import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import './Dashboard.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBook, faCalendarDays, faPersonChalkboard, faSchool } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="dashB_detailew">
      <PageHeader pageName="Dashboard" />

      <div className="p-4">
        <Row >
          <Col>

            <div className="dashB_card _crad1 rounded p-3 ">
              <div className="d-flex">
                <div className="_card_icon rounded shadow-sm d-flex">
                  <FontAwesomeIcon icon={faSchool} className="_ft24 m-auto text-white" />
                </div>
                <div className="ms-auto text-end">
                  <div>Student</div>
                  <h3>6000</h3>
                </div>
              </div>
              <hr></hr>
              <div className="d-flex">
                Detailes view<FontAwesomeIcon icon={faArrowRight} className="ms-auto my-auto" />
              </div>
            </div>
          </Col>

          <Col>

<div className="dashB_card _crad2 rounded p-3 ">
  <div className="d-flex">
    <div className="_card_icon rounded shadow-sm d-flex">
      <FontAwesomeIcon icon={faPersonChalkboard} className="_ft24 m-auto text-white" />
    </div>
    <div className="ms-auto text-end">
      <div>Instructor</div>
      <h3>250</h3>
    </div>
  </div>
  <hr></hr>
  <div className="d-flex">
    Detailes view<FontAwesomeIcon icon={faArrowRight} className="ms-auto my-auto" />
  </div>
</div>
</Col>
<Col>

<div className="dashB_card _crad3 rounded p-3 ">
  <div className="d-flex">
    <div className="_card_icon rounded shadow-sm d-flex">
      <FontAwesomeIcon icon={faBook} className="_ft24 m-auto text-white" />
    </div>
    <div className="ms-auto text-end">
      <div>Theory</div>
      <h3>1425</h3>
    </div>
  </div>
  <hr></hr>
  <div className="d-flex">
    Detailes view<FontAwesomeIcon icon={faArrowRight} className="ms-auto my-auto" />
  </div>
</div>
</Col>
<Col>

<div className="dashB_card _crad4 rounded p-3 ">
  <div className="d-flex">
    <div className="_card_icon rounded shadow-sm d-flex">
      <FontAwesomeIcon icon={faCalendarDays} className="_ft24 m-auto text-white" />
    </div>
    <div className="ms-auto text-end">
      <div>Schedule</div>
      <h3>500</h3>
    </div>
  </div>
  <hr></hr>
  <div className="d-flex">
    Today<FontAwesomeIcon icon={faArrowRight} className="ms-auto my-auto" />
  </div>
</div>
</Col>
  
        </Row>

      </div>


    </div>


  );
}

export default Dashboard;