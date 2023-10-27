import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from "axios"

const Register = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
      });
    const [err, setError] = useState(null);


    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("/api/auth/register", inputs);
          navigate("/login");
        } catch (err) {
          setError(err.response.data);
        }
      };


  return (
    <div className='page-container'>
        <h1 className='page-title'>Dashboard</h1>

        <section className='register-section'>

            <div className='intro-container'>
                <h2>Information</h2>

                {/* <img className="intro-image" src={IntroImage} alt='introduction image'></img> */}

                <div className='intro-container-content'>
                    <p>Add employee: read the guide</p>
                    <p>First time here ? Put a glance on <Link to='#'>The User Guide of the Fortunato Portal</Link></p>                    
                </div>
            </div>

            <div className='register-form-container'>
                <h2>Add Employee to Database</h2>

                <div className='register-form'>
                    <div className='left-container'>
                        <div className='input-container'>
                            <p className='input-label'>Name</p>
                            <input required type="text" name="name" className='input-field' placeholder='John...' onChange={handleChange}></input>
                        </div>

                        <div className='input-container'>
                            <p className='input-label'>Surname</p>
                            <input require type="text" name="surname" className='input-field' onChange={handleChange} placeholder='Doe...'></input>
                        </div>

                        <div className='input-container'>
                            <p className='input-label'>Birthdate</p>
                            <input type="text" required name="birthdate" className='input-field' onChange={handleChange} placeholder='DD/MM/YYYY'></input>
                        </div>

                        <div className='input-container'>
                            <p className='input-label'>Email</p>
                            <input type="text" required name="email" className='input-field' onChange={handleChange} placeholder='myemail@gmail.com'></input>
                        </div>

                        <div className='input-container'>
                            <p className='input-label'>Password</p>
                            <input type="password" required name="password" className='input-field' onChange={handleChange} placeholder='*******'></input>
                        </div>
                    </div>

                    <div className='right-container'>

                        <div className='input-container'>
                            <p className='input-label'>Laboratory</p>
                            <input type="text" required name="hasLaboratory"className='input-field' onChange={handleChange}></input>
                        </div>

                        <div className='input-container'>
                            <p className='input-label'>Status</p>
                            <input type="text" required name="status" className='input-field'onChange={handleChange}></input>
                        </div>

                        <div className='input-container'>
                            <p className='input-label'>Contract</p>
                            <input type="text" required name="contractType" className='input-field'onChange={handleChange}></input>
                        </div>

                        <div className='input-container'>
                            <p className='input-label'>University</p>
                            <input type="text" required name="hasUniversity" className='input-field'onChange={handleChange}></input>
                        </div>

                        <div className='buttons-container'>
                            <button onClick={handleSubmit} className='register-btn'>Add to Database</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Register