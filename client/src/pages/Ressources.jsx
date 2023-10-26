import React from 'react'
import {useState, useEffect} from 'react'
import { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from "../context/authContext";
import axios from 'axios';

const Ressources = () => {

  const [employees, setEmployees] = useState([]);
  const [labos, setLabos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/labos');
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
        const res = await axios.get('/employees');
        setEmployees(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const columns = ['Name', 'Address', 'City', 'Phone number', 'Email', 'Website', 'Nb of emp.'];
  const columnsEmployee = ['Name','Surname','Birthdate','Laboratory','Status','University', 'Email'];

  return (
    <div className='ressources-container'>
      <h2 className='page-title'>Ressources</h2>

      <div className='table-container'>
        <h2 className='table-title'>Labos</h2>
        <div className='table'>

          <div className='table-header'>
              {columns.map((column) => (
                <p key={column} className='column-header'>{column}</p>
              ))}
          </div>

          <div className='table-content'>
            {labos.map((labo) => (
                <div key={labo.id} className='table-row'>
                  <p>{labo.name}</p>
                  <p>{labo.address}</p>
                  <p>{labo.city}</p>
                  <p>{labo.phoneNumber}</p>
                  <p>{labo.email}</p>
                  <p>{labo.website}</p>
                  <p>{labo.headcount}</p>
                </div>
              ))}
          </div>
        </div>
      </div>


      <div className='tab-container'>
        <h2>Employees</h2>
        <table>
          <thead>
            <tr>
              {columnsEmployee.map((column) => (
                <th key={column} className='column-header'>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className='table-row'>
                <td>{employee.name}</td>
                <td>{employee.surname}</td>
                <td>{employee.birthdate}</td>
                {employee.has_laboratory? <td>{employee.has_laboratory}</td> : "NaN"}
                <td>{employee.status}</td>
                {employee.university ? <td>{employee.university}</td> : "NaN"}
                <td>{employee.eamil}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
    </div>
  )
}

export default Ressources