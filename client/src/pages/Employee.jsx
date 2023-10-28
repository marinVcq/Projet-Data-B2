import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import axios from 'axios';



const Employee = () => {

  const [employee, setEmployee] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  // Get the employee Id
  const employeeId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/employees/${employeeId}`);
        console.log(res.data)
        setEmployee(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [employeeId]);


  return (
    <div className='employee-page'>
      <h1 className='employee-page-title'>Employee details</h1>

      <div className='employee-details-container'>
        <h2 className='employee-name'>{employee.name && employee.surname ? employee.name + " " + employee.surname : "Empty"}</h2>
        
        <div className='details'>
          <div className='subcontainer'>
            <div className='detail'>
              <p className='detail-label'>Name:</p>
              <p className={`detail-value ${employee.name ? '' : 'nan-value'}`}>
                {employee.name ? employee.name : "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Surname:</p>
              <p className={`detail-value ${employee.surname ? '' : 'nan-value'}`}>
                {employee.surname || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Email:</p>
              <p className={`detail-value ${employee.email ? '' : 'nan-value'}`}>
                {employee.email || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Birthdate:</p>
              <p className={`detail-value ${employee.birthdate ? '' : 'nan-value'}`}>
                {employee.birthdate || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Laboratory:</p>
              <p className={`detail-value ${employee.has_laboratory ? '' : 'nan-value'}`}>
                {employee.has_laboratory || "NaN"}
              </p>
            </div>
          </div>

          <div className='subcontainer'>
            <div className='detail'>
              <p className='detail-label'>Status:</p>
              <p className={`detail-value ${employee.status ? '' : 'nan-value'}`}>
                {employee.status || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>University:</p>
              <p className={`detail-value ${employee.has_university ? '' : 'nan-value'}`}>
                {employee.has_university || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Contract:</p>
              <p className={`detail-value ${employee.contractType ? '' : 'nan-value'}`}>
                {employee.contractType || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Thesis:</p>
              <p className={`detail-value ${employee.has_thesis ? '' : 'nan-value'}`}>
                {employee.has_thesis || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Phone number:</p>
              <p className={`detail-value ${employee.phoneNumber ? '' : 'nan-value'}`}>
                {employee.phoneNumber || "NaN"}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Employee