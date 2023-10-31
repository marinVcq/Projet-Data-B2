import React, { useState, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

// Import assets
import DetailIcon from "../assets/shared/search-icon-blue.png"

const Dashboard = () => {

    const [table, setTable] = useState("laboratory");
    const[filterOptions, setFilterOptions] = useState( ['name', 'address', 'city']);
    const [filter, setFilter] = useState(filterOptions[0]);
    const [value, setValue] = useState("");

    // Store table content
    const [labos,setLabos] = useState([]);
    const [experiments, setExperiments] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [projects, setProjects] = useState([]);


    const employeeHeader = ["Name", "Surname", "Phone Number", "Email", "Laboratory"];
    const laboratoryHeader = ["Name", "City", "Phone Number", "Email", "Number of Emp."];
    const projectHeader = ["Subject", "Description", "Status", "Publication Nb.", "Start Date"];

    // Get all tables
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resLabos = await axios.get('/api/labos');
                setLabos(resLabos.data);

                const resExperiments = await axios.get('/api/experiments');
                setExperiments(resExperiments.data);

                const resEmployees = await axios.get('/api/employees');
                setEmployees(resEmployees.data);

                const resProjects = await axios.get('/api/projects');
                setProjects(resProjects.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const handleTableChange = (e) => {
        // Update the table state when the selected value changes
        const selectedTable = e.target.value;
        console.log('Selected Table:', selectedTable);
    
        let filterOptions = [];
    
        switch (selectedTable) {
            case 'laboratory':
                filterOptions = ['name', 'address', 'city'];
                break;
            case 'employee':
                filterOptions = ['name', 'surname', 'status'];
                break;
            case 'project':
                filterOptions = ['name', 'description', 'status'];
                break;
            // Add more cases for other tables if needed
            default:
                filterOptions = [];
        }
    
        console.log('Filter Options:', filterOptions);
    
        setFilterOptions(filterOptions);
        setFilter(filterOptions[0]);
        setTable(selectedTable);
    };
    
    const handleFilterChange = (e) => {
        // Update the table state when the selected value changes
        setFilter(e.target.value, () => {
            console.log("current filter " + e.target.value);
        });
    };
    
    const handleValueChange = (e) => {
        // Update the table state when the selected value changes
        setValue(e.target.value);
    };

  return (
    <div className='dashboard-container'>
       <h1 className='page-title'>Database Request</h1>

       <section className='dashboard-navigation'>
            <Link to='/dashboard' className='navbar-link'>Database request</Link>
            <Link to='/ressources' className='navbar-link'>Global Ressources</Link>
            <Link to='/projects' className='navbar-link'>Projects</Link>
            <Link to='/inventory' className='navbar-link'>Inventory</Link>
            <Link to='/reservation' className='navbar-link'>Reservation</Link>
       </section>

       <section className='panels-container'>

            <div className='search-container'>

                <h2>Search form</h2>

                <form className='search-form'>

                    <div className='input-container'>
                        <label for="tableName">Select a search topic:</label>
                        <select id="tableName" name="tableName" className='input-field' onChange={handleTableChange}>
                            <option value="laboratory">Laboratory</option>
                            <option value="employee">Employee</option>
                            <option value="project">Project</option>
                            <option value="experiment">Experiment</option>
                        </select>                    
                    </div>


                    <div className='input-container'>
                        <label for="filterName">Filter by:</label>
                        <select id="filterName" name="filterName" className='input-field' onChange={handleFilterChange}>
                        {filterOptions.map((option) => (
                            <option key={option} value={option}>
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                            </option>
                        ))}
                        </select>                    
                    </div>

                    <div className='input-container'>
                        <label for="valueName">Value:</label>
                        <input type='text' name="filterValue" className='input-field' onChange={handleValueChange}></input>                    
                    </div>

                </form>
            </div> 

       </section>
        {table === "laboratory" &&(
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
                {labos
                .filter(labo => labo[filter]?.toLowerCase().includes(value.toLowerCase()))
                .map((labo) => {

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
        )}

        {table === "employee" && (
            <div className='ressources-table-container'>
                <h2 className='ressources-table-title'>Employee</h2>
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
                        .filter(employee => employee[filter]?.toLowerCase().includes(value.toLowerCase()))
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
        )}

      
    </div>
  )
}

export default Dashboard