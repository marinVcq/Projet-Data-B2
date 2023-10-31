import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import axios from 'axios';



const Project = () => {

  const [project, setProject] = useState({});
  const [experiment, setExperiment] = useState({})
  const [leader, setLeader ] = useState({})

  const location = useLocation();
  const navigate = useNavigate();

  // Get the project Id
  const projectId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  // Fetch project Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/projects/${projectId}`);
        console.log(res.data)
        setProject(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [projectId]);

  // Fetch experiments Data 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/experiments/${project.has_experiment}`);
        setExperiment(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [project]);

  // Fetch the project leader
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/experiments/${project.has_experiment}`);
        setExperiment(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [project]);


  return (
    <div className='project-page'>
      <h1 className='project-page-title'>Laboratory details</h1>

      <section className='dashboard-navigation'>
        <Link to='/dashboard' className='navbar-link'>Database request</Link>
        <Link to='/ressources' className='navbar-link'>Global Ressources</Link>
        <Link to='/projects' className='navbar-link'>Projects</Link>
        <Link to='/inventory' className='navbar-link'>Inventory</Link>
        <Link to='/reservation' className='navbar-link'>Reservation</Link>
      </section>


      <div className='project-details-container'>
        <h2 className='project-name'>{project.subject ? project.subject : "Empty"}</h2>


        <div className='details'>
          <div className='subcontainer'>
            <div className='detail'>
              <p className='detail-label'>Name:</p>
              <p className={`detail-value ${project.subject ? '' : 'nan-value'}`}>
                {project.subject || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Description:</p>
              <p className={`detail-value ${project.description ? '' : 'nan-value'}`}>
                {project.description || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Status:</p>
              <p className={`detail-value ${project.status ? '' : 'nan-value'}`}>
                {project.status || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Start Date:</p>
              <p className={`detail-value ${project.startDate ? '' : 'nan-value'}`}>
                {project.startDate || "NaN"}
              </p>
            </div>
          </div>

          <div className='subcontainer'>

          <div className='detail'>
              <p className='detail-label'>Project Manager</p>
              <p className={`detail-value ${project.has_leader ? '' : 'nan-value'}`}>
                {project.has_leader || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Publication Nb:</p>
              <p className={`detail-value ${project.publicationCount ? '' : 'nan-value'}`}>
                {project.publicationCount || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Experiment:</p>
              <p className={`detail-value ${experiment.goal ? '' : 'nan-value'}`}>
                {experiment.goal || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Experiment Description:</p>
              <p className={`detail-value ${experiment.description ? '' : 'nan-value'}`}>
                {experiment.description || "NaN"}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project