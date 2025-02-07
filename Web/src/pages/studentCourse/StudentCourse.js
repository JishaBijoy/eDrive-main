
import { useEffect, useRef, useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import axios from '../../api/axios';
import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
const STUDENT_COURSE_URL = "Student/GetStudentCourseList"

const StudentCourse = () => {



    const [studentCourseList, setStudentCourseList] = useState();
    const [common, setCommon] = useState({});
    const R_Form = useRef();
    let navigate = useNavigate()
    const loadFun = async (e) => {
        debugger
        try {
            const response = await axios.get(`${STUDENT_COURSE_URL}`);    
            console.log(response.data)    
            setStudentCourseList(response.data)
        } catch (err) {
            debugger;
            navigate('/login', { replace: true });
        }
    }

    useEffect(() => {
        loadFun();
    }, []);


const studentCourseForm = [

    
        {
            label: "Course",
            name: "course",
            type: "select",
            flag: true,
            disable: false,
            id: "course",
        },
           
        {
            label: "Pre Start Date",
            name: "preStartDate",
            type: "date",
            flag: true,
            disable: false,
            id: null,
        },
           
        {
            label: "Evaluator",
            name: "evaluator",
            type: "text",
            flag: true,
            disable: false,
            id: null,
        }
    ,
           
        {
            label: "Admission Date",
            name: "admissionDate",
            type: "date",
            flag: true,
            disable: false,
            id: null,
        } ,     {
            label: "Admission No",
            name: "admissionNo",
            type: "text",
            flag: true,
            disable: false,
            id: null,
        } ,     {
            label: "Contact No",
            name: "contactNo",
            type: "text",
            flag: true,
            disable: false,
            id: null,
        } ,     {
            label: "Training Level",
            name: "trainingLevel",
            type: "select",
            flag: true,
            disable: false,
            id: 'trainingLevel',
        },     {
            label: "Card No",
            name: "cardNo",
            type: "text",
            flag: true,
            disable: false,
            id: null,
        },     {
            label: "Transmission",
            name: "transmission",
            type: "select",
            flag: true,
            disable: false,
            id: 'transmission',
        },     {
            label: "Nationality",
            name: "nationality",
            type: "select",
            flag: true,
            disable: false,
            id: 'nationality',
        },     {
            label: "Gender",
            name: "gender",
            type: "redio",
            flag: true,
            disable: false,
            id: null,
        },     {
            label: "Language",
            name: "language",
            type: "select",
            flag: true,
            disable: false,
            id: 'language',
        }
]





const handleSubmit = (e) => {
    e.preventDefault();

}



const formSelect = (item, key) => {
    return (
        <Form.Select aria-label="Floating label select example" className="_ft14" name={item.name}>
            <option value=''>Select menu</option>                                                    {
                common[item.id]?.map((item, _key) => (
                    <option key={`con${_key}${key}`} value={item.id}>{item.description}</option>
                ))
            }
        </Form.Select>
    )
}
const radioSelect = (_item, key) => {
    return (
        <div className="d-flex" name={_item.name}>
            {
                common[_item.id]?.map((item, _key) => (<label key={`con${_key}${key}`} className="rad-label">
                    <input type="radio" class="rad-input" value={item.id} name={_item.name} defaultChecked={item.id == common[_item.id][0].id} />
                    <div className="rad-design"></div>
                    <div className="rad-text">{item.description}</div>
                </label>))
            }



        </div>
    )
}

const formControl = (item) => {     
    return (
        item.type == 'textarea' ? <Form.Control placeholder={item.label} as="textarea" name={item.name} className="py-1 _ft14" /> : <Form.Control type={item.type} placeholder={item.label} name={item.name} className="py-1 _ft14" />
    )

}

    return ( 
<div>
        <PageHeader pageName="Student Cource Preference"></PageHeader>
        
        
        <div className="p-4">
                <Form onSubmit={handleSubmit} ref={R_Form}>
                    <h6 className="mb-3">
                        <strong>Registration</strong>
                    </h6>
                    <Row>
                        {
                            common && studentCourseForm.map((item, key) => (
                                item.flag && <Col xs={6}>
                                    <FloatingLabel
                                        controlId={item.name}
                                        label={item.label}
                                        className={`_ft14 _floatingInput ${item.type}_w ${item.type == 'radio' ? 'mb-0 pt-2' : 'mb-3'}`}
                                        key={`mainInfo-${key}`}
                                    >
                                        {
                                            item.type != 'select' && item.type != 'radio' ? (formControl(item)) :
                                                item.type == 'radio' ? radioSelect(item, key) : formSelect(item, key)

                                        }

                                    </FloatingLabel></Col>
                            ))

                        }
                    </Row>
                    <div className="position-sticky _p_sticky_b py-3 justify-content-center d-flex">
                        <Button variant="primary mx-2 _ft14" type="submit">Submit</Button>
                        <Button variant="secondary mx-2 _ft14" type="button">Reset</Button>
                    </div>
                </Form>
            </div>
        </div>
     );
}
 
export default StudentCourse;