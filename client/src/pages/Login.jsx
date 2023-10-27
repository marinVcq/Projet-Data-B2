import React from 'react'
import {useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from "../context/authContext";


// Import assets
import IntroImage from '../assets/shared/intro-img.png'

const Login = () => {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [inputs, setInputs] = useState({
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
            await login(inputs)
            navigate("/");
        } catch (err) {
            setError(err.response.data);
        }
    };

  return (
    <div className='page-container'>
        <h1 className='page-title'>Dashboard</h1>

        <section className='login-section'>

            <div className='intro-container'>
                <h2>Information</h2>

                <img className="intro-image" src={IntroImage} alt='introduction'></img>

                <div className='intro-container-content'>
                    <p>Welcome to the Fortunato Employee Portal.</p>
                    <p>
                        First time here ? Put a glance on <Link to='#'>The User Guide of the Fortunato Portal</Link>
                        This portal is dedicated to enhancing collaboration and efficiency within our organization. It provides employees with secure access to
                         essential resources, facilitating seamless communication and streamlining day-to-day operations.
                        Login to access personalized information and contribute to the collective success of our pharmaceutical endeavors.
                        For assistance, please contact the IT department.
                    </p>                    
                </div>
            </div>

            <div className='login-form-container'>
                <h2>Sign In</h2>

                <div className='login-form'>
                    <div className='input-container'>
                        <p className='input-label'>Email</p>
                        <input type="text" className='input-field' name="email" onChange={handleChange}></input>
                    </div>

                    <div className='input-container'>
                        <p className='input-label'>Password</p>
                        <input type="text" className='input-field' name="password" onChange={handleChange}></input>
                    </div>

                    <div className='checkbox-container'>
                        <input type="checkbox"></input>
                        <p>Remember me on this device</p>
                    </div>

                    <p className='register-link'>Not already member? <Link to="/register" className='link'>Sign Up</Link> for an account.</p>
                    {err ? <p className='login-error'>This is an error</p> : "" }
                    
                    <div className='buttons-container'>
                        <button className='login-btn' onClick={handleSubmit}>Login</button>
                        <Link to="#" className='link'>Can't acces your account ?</Link>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Login