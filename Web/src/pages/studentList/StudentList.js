import { useEffect, useState } from "react";
import axios from '../../api/axios';
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import PageHeader from "../../components/PageHeader";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
const STUDENT_LIST_URL = 'Student/GetStudentList'

const StudentList = () => {

 const [searchValue, setSearchValue] = useState();
    const [studentList, setStudentList] = useState();
    let navigate = useNavigate()
    const loadFun = async (e) => {
        debugger
        try {
            const response = await axios.get(`${STUDENT_LIST_URL}`);        
            setStudentList(response.data)
        } catch (err) {
            debugger;
            navigate('/login', { replace: true });
        }
    }

    useEffect(() => {
        loadFun();
    }, []);
    const filterFun = (item)=>{
      return Object.keys(item).some(key => item[key].toString().toLowerCase().search(searchValue) !== -1);
    }

    return ( 

        <div>
             <PageHeader pageName="Student List" />

             <div  className="_search my-3 mx-auto">
  <label for="search">Search for stuff</label>
  <input id="search" onChange={(e)=>setSearchValue(e.target.value.toLowerCase())} type="search" placeholder="Search..." autofocus required />
  <button type="submit">Go</button>    
</div>

             <Table striped bordered hover className="studentList">
      <thead>
        <tr>
          <th>Student Id</th>
          <th>Full Name</th>
          <th>Id Number</th>
          <th>Phone Number</th>
          <th>Registration No</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
{
    studentList?.filter(filterFun).map((item,key)=>(
        <tr>
        <td>{item.studentID}</td>
        <td>{item.fullName}</td>
        <td>{item.idNumber}</td>
        <td>{item.phoneNo}</td>
        <td>{item.registrationNo}</td>
        <td className="text-center"> <Link to={`/student/${item.studentID}`}  className="btn py-1 px-2 mx-1 border-0"> <FontAwesomeIcon icon={faPenToSquare}/> </Link >  <button className="btn py-1 px-2 mx-1 border-0">  <FontAwesomeIcon icon={faTrash}/> </button>  </td>
      </tr>
    ))
}

       
      
      </tbody>
    </Table>
        </div>
     );
}
 
export default StudentList;