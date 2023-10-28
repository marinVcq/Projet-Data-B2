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
      <h1 className='laboratory-page-title'>Laboratory detail</h1>

      <div className='laboratory-detail-container'>
        <h2 className='laboratory-name'>{labo.name ? labo.name : "Empty"}</h2>

        <div className='detail-container'>
        </div>
      </div>
    </div>
  )
}

export default Laboratory