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
    <div className='login-page'>
        <h1 className='login-page-title'>Employee Portal</h1>

        <div className='login-page-container'>

            <h2 className='login-page-container-title'>Login</h2>

            <div className='login-form-container'>

                <div className='input-container'>
                    <h3 className='input-label'>Email:</h3>
                    <input className='input-field' placeholder='youremail@email.com' name="email" type='text' required onChange={handleChange}></input>
                </div>

                <div className='input-container'>
                    <h3 className='input-label'>Password:</h3>
                    <input className='input-field' placeholder='********' type='password' name="password" required onChange={handleChange}></input>
                </div>

                {err ? <p className='login-error'>{err}</p> : "" }


                <button className='login-button' onClick={handleSubmit}>Login</button>
                
                <Link to="#" className='support-link'>Can't acces your account ?</Link>

            </div>
        </div>



    </div>
  )
}

export default Login