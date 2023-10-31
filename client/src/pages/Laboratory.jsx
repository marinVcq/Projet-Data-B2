import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import axios from 'axios';



const Laboratory = () => {

  const [labo, setLabo] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  // Get the labo Id
  const laboId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/labos/${laboId}`);
        console.log(res.data)
        setLabo(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [laboId]);


  return (
    <div className='laboratory-page'>
      <h1 className='laboratory-page-title'>Laboratory details</h1>

      <section className='dashboard-navigation'>
        <Link to='/dashboard' className='navbar-link'>Database request</Link>
        <Link to='/ressources' className='navbar-link'>Global Ressources</Link>
        <Link to='/projects' className='navbar-link'>Projects</Link>
        <Link to='/inventory' className='navbar-link'>Inventory</Link>
        <Link to='/reservation' className='navbar-link'>Reservation</Link>
      </section>


      <div className='laboratory-details-container'>
        <h2 className='laboratory-name'>{labo.name ? labo.name : "Empty"}</h2>


        <div className='details'>
          <div className='subcontainer'>
            <div className='detail'>
              <p className='detail-label'>Name:</p>
              <p className={`detail-value ${labo.name ? '' : 'nan-value'}`}>
                {labo.name || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Speciality:</p>
              <p className={`detail-value ${labo.speciality ? '' : 'nan-value'}`}>
                {labo.speciality || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Address:</p>
              <p className={`detail-value ${labo.address ? '' : 'nan-value'}`}>
                {labo.address || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>City:</p>
              <p className={`detail-value ${labo.city ? '' : 'nan-value'}`}>
                {labo.city || "NaN"}
              </p>
            </div>
          </div>

          <div className='subcontainer'>
            <div className='detail'>
              <p className='detail-label'>Phone number:</p>
              <p className={`detail-value ${labo.phoneNumber ? '' : 'nan-value'}`}>
                {labo.phoneNumber || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Email:</p>
              <p className={`detail-value ${labo.email ? '' : 'nan-value'}`}>
                {labo.email || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Website:</p>
              <p className={`detail-value ${labo.website ? '' : 'nan-value'}`}>
                {labo.website || "NaN"}
              </p>
            </div>

            <div className='detail'>
              <p className='detail-label'>Number of Emp:</p>
              <p className={`detail-value ${labo.headcount ? '' : 'nan-value'}`}>
                {labo.headcount || "NaN"}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Laboratory