import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from "react";
import axios from 'axios';

// Import assets
import DetailIcon from "../assets/shared/search-icon-blue.png"

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/projects');
        setProjects(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);


  return (
    <div className='projects-page'>
      <div className='projects-page-title'>Projects</div>

      <section className='dashboard-navigation'>
        <Link to='/dashboard' className='navbar-link'>Database request</Link>
        <Link to='/ressources' className='navbar-link'>Global Ressources</Link>
        <Link to='/projects' className='navbar-link'>Projects</Link>
        <Link to='/inventory' className='navbar-link'>Inventory</Link>
        <Link to='/reservation' className='navbar-link'>Reservation</Link>
      </section>

      <div className='projects-table-container'>
        <h2 className='projects-table-title'>Projects</h2>
        <div className='table'>
          <div className='table-header'>
                <p className='column-header' id="subject-header">Subject</p>
                <p className='column-header' id="description-header">Description</p>
                <p className='column-header' id="status-header">Status</p>
                <p className='column-header'id="publication-header">Publication Nb.</p>
                <p className='column-header'id="date-header">Start Date</p>
          </div>
          <div className='table-content'>
          {projects.map((project) => {

            return (
              <div key={project.id} className='table-row'>
                <p className={project.subject ? '' : 'nan-value'} id='subject-cell'>{project.subject ? project.subject : "NaN"}</p>
                <p className={project.description ? '' : 'nan-value'} id='description-cell'>{project.description ? project.description : "NaN"}</p>
                <p className={project.status ? '' : 'nan-value'} id='status-cell'>{project.status ? project.status : "NaN"}</p>
                <p className={project.publicationCount ? '' : 'nan-value'} id='publication-cell'>{project.publicationCount ? project.publicationCount : "NaN"}</p>
                <p className={project.startDate ? '' : 'nan-value'} id='date-cell'>{project.startDate ? project.startDate : "NaN"}</p>
                <Link className="link" to={`/project/${project.idproject}`}>
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

export default Projects