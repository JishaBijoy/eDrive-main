import logo from './logo.svg';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import './App.scss';
import Layout from './layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import NoPage from './pages/noPage/NoPage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import StudentRegistration from './pages/StudentRegistration/StudentRegistration';
import { ToastContainer } from 'react-toastify';
import UserRefresh from './user/UserRefresh';
import { useContext, useEffect } from 'react';
import AuthContext from './context/AuthProvider';
import { GetLocalStorage } from './localStorage/LocalStorage';
import StudentList from './pages/studentList/StudentList';
import StudentCourse from './pages/studentCourse/StudentCourse';
import StudentSchedule from './pages/studentSchedule/StudentSchedule';
function App() {

  const iconList = Object.keys(Icons)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .map((icon) => Icons[icon]);
  library.add(...iconList);
  const { auth, setAuth } = useContext(AuthContext);
  let navigate = useNavigate();
  let _loaction = useLocation();
  let from = _loaction.state?.from?.pathname || '/home'
  useEffect(() => {
    const token = GetLocalStorage('auth');
    if (token?.tokenKey) {
      setAuth(token);
      navigate(from, { replace: true });
    }
  }, [])
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Routes>

        <Route index element={!auth?.tokenKey && <Login />} />
        <Route path="login" element={!auth?.tokenKey && <Login />} />
        <Route path="register" element={!auth?.tokenKey && <Register />} />

        <Route element={<UserRefresh />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="home" element={<Dashboard />} /> 
            <Route path="home/dashboard" element={<Dashboard />} />
            <Route path='master' element={<StudentRegistration />}>
              {/* <Route path="student-registration" element={<StudentRegistration />} /> */}
            </Route>
           
              <Route path="/student" element={<StudentRegistration />} />
              <Route path="/student/:studentId" element={<StudentRegistration />} />              
              <Route path="/student/registration" element={<StudentRegistration />} />
              <Route path="/student/student-list" element={<StudentList />} />
              <Route path="/student/student-course" element={<StudentCourse />} />


            <Route path="/schedule" element={<StudentSchedule />} />
              
           
            <Route path="*" element={<NoPage />} />
          </Route>
        </Route>
      </Routes>

    </>
  );
}

export default App;
