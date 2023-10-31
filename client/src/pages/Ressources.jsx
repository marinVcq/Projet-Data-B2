import React from 'react'
import {useState, useEffect} from 'react'
import { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from "../context/authContext";
import axios from 'axios';

// Import assets
import DetailIcon from "../assets/shared/search-icon-blue.png"

const Ressources = () => {

  const [employees, setEmployees] = useState([]);
  const [labos, setLabos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/labos');
        setLabos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/employees');
        setEmployees(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className='ressources-page'>

      <h2 className='ressources-page-title'>Global Ressources</h2>

      <section className='dashboard-navigation'>
            <Link to='/dashboard' className='navbar-link'>Database request</Link>
            <Link to='/ressources' className='navbar-link'>Global Ressources</Link>
            <Link to='/projects' className='navbar-link'>Projects</Link>
            <Link to='/inventory' className='navbar-link'>Inventory</Link>
            <Link to='/reservation' className='navbar-link'>Reservation</Link>
       </section>

      <div className='ressources-table-container'>
        <h2 className='ressources-table-title'>Labos</h2>
        <div className='table'>
          <div className='table-header'>
                <p className='column-header' id="name-header">Name</p>
                <p className='column-header' id="city-header">City</p>
                <p className='column-header' id="phone-header">Phone Number</p>
                <p className='column-header'id="email-header">Email</p>
                <p className='column-header'id="headcount-header">Number of Emp.</p>
          </div>
          <div className='table-content'>
          {labos.map((labo) => {

            return (
              <div key={labo.id} className='table-row'>
                <p className={labo.name ? '' : 'nan-value'} id='name-cell'>{labo.name ? labo.name : "NaN"}</p>
                <p className={labo.city ? '' : 'nan-value'} id='city-cell'>{labo.city ? labo.city : "NaN"}</p>
                <p className={labo.phoneNumber ? '' : 'nan-value'} id='phone-cell'>{labo.phoneNumber ? labo.phoneNumber : "NaN"}</p>
                <p className={labo.email ? '' : 'nan-value'} id='email-cell'>{labo.email ? labo.email : "NaN"}</p>
                <p className={labo.headcount ? '' : 'nan-value'} id='headcount-cell'>{labo.headcount ? labo.headcount : "NaN"}</p>
                <Link className="link" to={`/laboratory/${labo.idlaboratoire}`}>
                  <img className='detail-icon' src={DetailIcon} alt="view detail"></img>
                </Link>
              </div>
            );
          })}

          </div>
        </div>
      </div>


      <div className='ressources-table-container'>
        <h2 className='ressources-table-title'>Employees</h2>
        <div className='table'>
          <div className='table-header'>
                <p className='column-header' id="emp-name-header">Name</p>
                <p className='column-header' id="emp-surname-header">Surname</p>
                <p className='column-header' id="emp-phone-header">Phone Number</p>
                <p className='column-header'id="emp-email-header">Email</p>
                <p className='column-header'id="emp-lab-header">Laboratory</p>
          </div>
          <div className='table-content'>
            {employees.map((employee) =>{

              const associatedLab = labos.find(lab => lab.idlaboratoire === employee.has_laboratory);

              return (
                <div key={employee.id} className='table-row'>
                    <p className={employee.name ? '' : 'nan-value'} id='emp-name-cell'>{employee.name ? employee.name : "NaN"}</p>
                    <p className={employee.surname ? '' : 'nan-value'} id='emp-surname-cell'>{employee.surname ? employee.surname : "NaN"}</p>
                    <p className={employee.phoneNumber ? '' : 'nan-value'} id='emp-phone-cell'>{employee.phoneNumber ? employee.phoneNumber : "NaN"}</p>
                    <p className={employee.email ? '' : 'nan-value'} id='emp-email-cell'>{employee.email ? employee.email : "NaN"}</p>
                    <p className={employee.has_laboratory ? '' : 'nan-value'} id='emp-lab-cell'>{associatedLab ? associatedLab.name : "NaN"}</p>
                    <Link className="link" to={`/employee/${employee.idemployee}`}><img className='detail-icon' src={DetailIcon} alt="view detail"></img></Link>
                </div>
              );
              })}
          </div>
        </div>
      </div>

      <div className='ressources-table-container'>
        <h2 className='ressources-table-title'>Reasearch Student</h2>
        <div className='table'>
          <div className='table-header'>
                <p className='column-header' id="emp-name-header">Name</p>
                <p className='column-header' id="emp-surname-header">Surname</p>
                <p className='column-header' id="emp-phone-header">Phone Number</p>
                <p className='column-header'id="emp-email-header">Email</p>
                <p className='column-header'id="emp-lab-header">Laboratory</p>
          </div>

          <div className='table-content'>
            {employees
              .filter(employee => employee.status === 'Research Student')
              .map(employee => {
                // Assuming you have a 'laboratories' array with laboratory information
                const associatedLab = labos.find(lab => lab.idlaboratoire === employee.has_laboratory);

                return (
                  <div key={employee.id} className='table-row'>
                    <p className={employee.name ? '' : 'nan-value'} id='emp-name-cell'>{employee.name ? employee.name : "NaN"}</p>
                    <p className={employee.surname ? '' : 'nan-value'} id='emp-surname-cell'>{employee.surname ? employee.surname : "NaN"}</p>
                    <p className={employee.phoneNumber ? '' : 'nan-value'} id='emp-phone-cell'>{employee.phoneNumber ? employee.phoneNumber : "NaN"}</p>
                    <p className={employee.email ? '' : 'nan-value'} id='emp-email-cell'>{employee.email ? employee.email : "NaN"}</p>
                    <p className={employee.has_laboratory ? '' : 'nan-value'} id='emp-lab-cell'>{associatedLab ? associatedLab.name : "NaN"}</p>
                    <Link className="link" to={`/employee/${employee.idemployee}`}>
                      <img className='detail-icon' src={DetailIcon} alt="view detail"></img>
                    </Link>
                  </div>
                );
              })}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Ressources