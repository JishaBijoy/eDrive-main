

import { useContext, useEffect, useRef, useState } from 'react';
import AuthContext from '../../context/AuthProvider';
import axios from '../../api/axios';
import { useLocation, useNavigate } from "react-router-dom";
import { Container, InputGroup, Form, Button, ToastBody } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faTrophy, faUser } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import './Login.scss';
import { SetLocalStorage } from '../../localStorage/LocalStorage';
const LOGIN_URL = '/Login/VerifyLogin'

const Login = () => {

  const { setAuth } = useContext(AuthContext);
  const [usr, setUsr] = useState('');
  const [pwd, setPwd] = useState('');
  const usrRef = useRef();
  const loginBytton = useRef();
  let navigate = useNavigate()
  let _loaction = useLocation()
  let from = _loaction.state?.from?.pathname || '/home'
  useEffect(() => {
    usrRef.current.focus()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (usr.length == 0 || usr === '' || usr === ' ') {
      toast.error('Please Enter Username', {});
      return;
    } else if (usr.length == 0 || usr === '' || usr === ' ') {

      toast.error('Please Enter Password', {});
      return;
    } else {
      const id = toast.loading("Please wait...")
      try {
        loginBytton.current.classList.add('disabled');
        const response = await axios.get(`${LOGIN_URL}?UName=${usr}&UPwd=${pwd}`);

        if (response.data.tokenKey) {
          setAuth(response?.data);
          toast.update(id, { render: "Success", type: "success", isLoading: false, autoClose: 1500 });
          SetLocalStorage('auth', response?.data);
          navigate(from, { replace: true });
          loginBytton.current.classList.remove('disabled');
        } else {
          toast.update(id, { render: "Unanthorized", type: "error", isLoading: false, autoClose: 2000 });
          loginBytton.current.classList.remove('disabled');
        }
        setUsr('');
        setPwd('');
      } catch (err) {
        loginBytton.current.classList.remove('disabled');
        if (!err?.response) {
          toast.update(id, { render: "No Server Response", type: "error", isLoading: false, autoClose: 2000 });
        } else if (err?.response?.status === 400) {
          toast.update(id, { render: "Missing Username or password", type: "error", isLoading: false, autoClose: 2000 });


        } else if (err?.response?.status === 401) {
          toast.update(id, { render: "Unanthorized", type: "error", isLoading: false, autoClose: 2000 });
        } else {
          toast.update(id, { render: "Login Filed", type: "error", isLoading: false, autoClose: 2000 });
        }
      }
    }
  }
  return (
    <Container fluid >
      <Row className='d-flex l_r_w vh-100'>
        <Col xs="5" className='px-5 d-flex flex-column justify-content-center align-items-center '>
          <div className='l_r_f w-100'>
            <div className='logo text-center mb-3'>
              <img src={window.location.origin + '/e-drive.png'} alt="Logo" className="w-100" />
            </div>
            <Form onSubmit={handleSubmit}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="_userName">
                  <FontAwesomeIcon icon={faUser} className='_svgIcon' />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="_userName"
                  className='_ft14'
                  ref={usrRef}
                  value={usr}
                  onChange={(e) => setUsr(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="_password">
                  <FontAwesomeIcon icon={faKey} className='_svgIcon' />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="_password"
                  className='_ft14'
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
              </InputGroup>
              <Form.Group className="mb-3 _ft12" controlId="_rememberMe">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <Button variant="primary  _ft14 px-5" type="submit" ref={loginBytton} >
                Login
              </Button>
            </Form>
          </div>
        </Col>
        <Col xs="7" className='d-flex'>
          <h2 className='m-auto'>
            Login Form
          </h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;