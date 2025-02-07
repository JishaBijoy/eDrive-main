import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import { useEffect, useId, useRef, useState } from 'react';
import axios from '../../api/axios';
import { useNavigate, useParams } from "react-router-dom";
import { GetLocalStorage } from "../../localStorage/LocalStorage";
import { toast } from "react-toastify";
const COMMON_URL = 'student/GetStudentCommon';
const GET_STUDENT_URL = 'Student/GetStudent?StudentId=';
const STUDENT_TRANSACTION_URL = 'Student/StudentTransaction'

const StudentRegistration = () => {



    const studentRegistrationForm = [
        {
            label: "First Name *",
            name: "firstName",
            type: "text",
            flag: true,
            disable: false,
            id: null,
        },
        {
            label: "Middle Name",
            name: "middleName",
            type: "text",
            flag: true,
            disable: false,
            id: null,
        },
        {
            label: "Last Name",
            name: "lastName",
            type: "text",
            flag: true,
            disable: false,
            id: null,
        },
        {
            label: "Full Name",
            name: "fullName",
            type: "text",
            flag: false,
            disable: false,
            id: null,
        },
        {
            label: "Full Name Arabic",
            name: "fullNameArabic",
            type: "text",
            flag: false,
            disable: false,
            id: null,
        },
        {
            label: "Gender",
            name: "gender",
            type: "radio",
            flag: true,
            disable: false,
            id: 'gender',
        },
        {
            label: "Date Of Birth",
            name: "dateOfBirth",
            type: "date",
            flag: true,
            disable: false,
            id: null,
        },
        {
            label: "Registration No",
            name: "registrationNo",
            type: "text",
            flag: true,
            disable: true,
            id: null,
        },
        {
            label: "Registration Date",
            name: "registrationDate",
            type: "date",
            flag: false,
            disable: false,
            id: null,
        },
        {
            label: "Nationality ID *",
            name: "nationalityID",
            type: "select",
            flag: true,
            disable: false,
            id: 1,
        },
        {
            label: "Id Number *",
            name: "idNumber",
            type: "text",
            flag: true,
            disable: false,
            id: null,
        },
        {
            label: "Address",
            name: "address",
            type: "text",
            flag: true,
            disable: false,
            id: null,
        },
        {
            label: "Phone No *",
            name: "phoneNo",
            type: "phone",
            flag: true,
            disable: false,
            id: null,
        },
        {
            label: "Source Media ID",
            name: "sourceMediaID",
            type: "select",
            flag: true,
            disable: false,
            id: 2,
        },
        {
            label: "Email *",
            name: "email",
            type: "email",
            flag: true,
            disable: false,
            id: null
        },
        {
            label: "Have Other National License",
            name: "haveOtherNationalLicense",
            type: "select",
            flag: true,
            disable: false,
            id: 'otherNationalLicense',
        },
        {
            label: "Sponsor Type ID",
            name: "sponsorTypeID",
            type: "select",
            flag: true,
            disable: false,
            id: 3
        },
        {
            label: "Sponsor ID",
            name: "sponsorID",
            type: "select",
            flag: true,
            disable: false,
            id: 4
        },
        {
            label: "Blood Type",
            name: "bloodType",
            type: "select",
            flag: true,
            disable: false,
            id: 'bloodType',
        },
        {
            label: "Status ID",
            name: "statusID",
            type: "text",
            flag: false,
            disable: true,
            id: null
        },
        {
            label: "Location ID",
            name: "locationID",
            type: "select",
            flag: true,
            disable: false,
            id: 6
        },
        {
            label: "PendingTestID",
            name: "pendingTestID",
            type: "select",
            flag: true,
            disable: false,
            id: 7
        },
        {
            label: "Learning License No",
            name: "learningLicenseNo",
            type: "text",
            flag: true,
            disable: false,
            id: null
        },
        {
            label: "Learning License Issue Date",
            name: "learningLicenseIssueDate",
            type: "date",
            flag: true,
            disable: false,
            id: null
        },
        {
            label: "Learning License ExpiryDate",
            name: "learningLicenseExpiryDate",
            type: "date",
            flag: true,
            disable: false,
            id: null
        },
        {
            label: "Qid Expiry",
            name: "qidExpiry",
            type: "date",
            flag: true,
            disable: false,
            id: null
        },
        {
            label: "Photo *",
            name: "photo",
            type: "file",
            flag: true,
            disable: false,
            id: null
        },
        {
            label: "Id Front *",
            name: "idFront",
            type: "file",
            flag: true,
            disable: false,
            id: null
        },
        {
            label: "Id Back *",
            name: "idBack",
            type: "file",
            flag: true,
            disable: false,
            id: null
        },
        {
            label: "Remarks",
            name: "remarks",
            type: "textarea",
            flag: true,
            disable: false,
            id: null
        }
    ]


    const { studentId } = useParams();

    const [common, setCommon] = useState({});
    const navigate = useNavigate()
    const R_Form = useRef();
    const loadFun = async (e) => {
        debugger
        try {
            const response = await axios.get(`${COMMON_URL}`);
            const groupBy = response.data.reduce(function (rv, x) {
                (rv[x['refId']] = rv[x['refId']] || []).push(x);
                return rv;
            }, {});
            ;
            console.log(groupBy);

            let _gender = [
                {
                    description: 'Male', id: 'male'
                },
                {
                    description: 'Female ', id: 'female'
                }
            ]

            let _otherNationalLicense = [
                {
                    description: 'Yes', id: true
                },
                {
                    description: 'No', id: false
                }
            ];

            let _bloodType = [
                {
                    description: 'A positive', id: 'A+'
                },
                {
                    description: 'A negative ', id: 'A-'
                }, {
                    description: 'B positive', id: 'B+'
                },
                {
                    description: 'B negative ', id: 'B-'
                }
            ]
            groupBy['gender'] = _gender;
            groupBy['otherNationalLicense'] = _otherNationalLicense;
            groupBy['bloodType'] = _bloodType
            setCommon(groupBy);
            if (studentId)
            getStudentdata();

        } catch (err) {
            debugger;
            navigate('/login', { replace: true });
        }
    }

    const getStudentdata = async () => {
        try {
            const response = await axios.get(`${GET_STUDENT_URL}${studentId}`);
            let obj = response.data;
            debugger;
            if (obj) {
                Object.entries(R_Form.current).forEach(([name, input]) => {
                    if (input.type != 'submit' && input.type != 'button') {
                        if (input.type != 'radio'){
                            debugger
                        input.value = obj[input.name] || '';
                        }else if(input.value==obj[input.name]) 
                        input.checked = true; 
                    }
                });
            }
        } catch (err) {

        }
    }

    useEffect(() => {
        loadFun();
    }, [])

    const studentTransactionFun = async (e) => {
        debugger

        try {
            const { data } = await axios.post(STUDENT_TRANSACTION_URL, e, {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json"
                }
            }
            )
            console.log(data);
            if (data.refId && data.statusId) {
                toast.success(data.message, {
                    position: "top-right",
                    autoClose: 750,
                });
            } else {
                toast.error(data.message, {
                    position: "top-right",
                    autoClose: 750,
                });
            }
        } catch (err) {
            debugger;
            toast.error('error', {
                position: "top-right",
                autoClose: 750,
            });
            // navigate('/login', { replace: true });
        }
    }



    const validation = (obj) => {
        debugger
        const errors = {};
        if (!obj.firstName.value.trim()) {
            debugger;
            toast.error('First name is required', {
                position: "top-right",
                autoClose: 750,
            });
            errors.firstName = "required"
        }
        if (!obj.nationalityID.value.trim()) {
            debugger;
            toast.error('Nationality ID is required', {
                position: "top-right",
                autoClose: 750,
            });
            errors.nationalityID = "required"
        }
        if (!obj.idNumber.value.trim()) {
            toast.error('Id Number is required', {
                position: "top-right",
                autoClose: 750,
            });
            errors.idNumber = "required"
        }
        if (!obj.phoneNo.value.trim()) {
            toast.error('Phone No is required', {
                position: "top-right",
                autoClose: 750,
            });
            errors.phoneNo = "required"
        }
        if (!obj.photo.value.trim()) {
            toast.error('Photo is required', {
                position: "top-right",
                autoClose: 750,
            });
            errors.photo = "required"
        } if (!obj.dateOfBirth.value.trim()) {
            toast.error('Date Of Birth is required', {
                position: "top-right",
                autoClose: 750,
            });
            errors.dateOfBirth = "required"
        }

        return errors;

    }



    const handleSubmit = (e) => {
        e.preventDefault();
        let tempPlayer = {};       
        let obj = e.target.elements;
        if (Object.keys(validation(obj)).length != 0) 
            return;     

        Object.entries(e.target.elements).forEach(([name, input]) => {
            if (input.type != 'submit' && input.type != 'button') {  
                 if (input.type != 'radio')
                    tempPlayer[input.name] = input.value;
                else if(input.checked) 
                    tempPlayer[input.name] = input.value;      
            }
        });
       
        let usr = GetLocalStorage('auth');
        
        tempPlayer['userID'] = Number(usr.userID);
        tempPlayer['nationalityID'] = Number(tempPlayer['nationalityID']) || 0;
        tempPlayer['sourceMediaID'] = Number(tempPlayer['sourceMediaID']) || 0;
        tempPlayer['sponsorTypeID'] = Number(tempPlayer['sponsorTypeID']) || 0;
        tempPlayer['sponsorID'] = Number(tempPlayer['sponsorID']) || 0;
        tempPlayer['locationID'] = Number(tempPlayer['locationID']) || 0;
        tempPlayer['pendingTestID'] = Number(tempPlayer['pendingTestID']) || 0;
        let O_N_License = new RegExp('true');
        tempPlayer['haveOtherNationalLicense'] = O_N_License.test(tempPlayer['haveOtherNationalLicense']);
        tempPlayer['studentID'] = 0;
        tempPlayer['fullNameArabic'] = '';
        tempPlayer['fullName'] = '';
        tempPlayer['registrationDate'] = '';
        tempPlayer['statusID'] = 0;    

        studentTransactionFun(tempPlayer);
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
            <PageHeader pageName="Student Registration" />
            <div className="p-4">
                <Form onSubmit={handleSubmit} ref={R_Form}>
                    <h6 className="mb-3">
                        <strong>Registration</strong>
                    </h6>
                    <Row>
                        {
                            common && studentRegistrationForm.map((item, key) => (
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

export default StudentRegistration;




