import FormHeader from '../../../components/authsComponents/formHeader/FormHeader'
import OptionForEmail from '../../../components/authsComponents/optionForEmail/OptionForEmail'
import SocialLogin from '../../../components/authsComponents/socialLogin/SocialLogin'
import SwitchOption from '../../../components/authsComponents/switchLogin_and_register/SwitchOption'
import { FaLock  , FaEnvelope, FaEye , FaEyeSlash  } from 'react-icons/fa'
import { useState } from 'react'
import './login.css'
import axiosInstance from '../../../utils/axioxInstance'
import { toast } from 'react-toastify'
import SubmitButton from '../../../components/authsComponents/submitButton/SubmitButton'
import { Link } from 'react-router-dom'

function Login() {

  const [showPassword , setShowPassword] = useState(false);
  const [formData , setFormData] = useState({
    email : "",
    password : "",
  })

  function handleChange(e){
    const {name , value} = e.target;

    setFormData((prev)=>({
      ...prev,
      [name] : value,
    }))
  }


  async function handleSubmit(e){
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/users/login' , formData);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }


  }

   
  return (
    <>
        <div className="login-main-container">
          <div className="login-container">
            <FormHeader heading={"Welcome back"} text={"Enter your credentials to access your account and orders "}/>
            <SocialLogin/>
            <OptionForEmail text={"OR CONTINUE WITH EMAIL"}/>
              <div className="user-data-container">
                          <form  id="register-form" onSubmit={handleSubmit}>
                            
              
                            <span className="email-contianer">
                              <label htmlFor="email-field">EMAIL ADDRESS</label>
                              <span className="email-field-field-with-icon">
                                <p className="icon">
                                  <FaEnvelope />
                                </p>
                                <input
                                  type="text"
                                  id="email-field-field"
                                  placeholder="alex@gmail.com"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
              
                                />
                              </span>
                            </span>
              
                            <span className="password-contianer">
                              <label htmlFor="passsword-field">PASSWORD</label>
                              <span className="password-field-field-with-icon">
                                <p className="icon">
                                  <FaLock />
                                </p>
                                <button type="button" className="showPasswordIcon" onClick={()=>{
                                  setShowPassword(!showPassword)
                                }}>
                                  {showPassword ? <FaEyeSlash/> : <FaEye/>}
                                </button>
                                <input
                                  type={showPassword ? "text" : "password"}
                                  id="password-field-field"
                                  placeholder="12345"
                                  name="password"
                                  value={formData.password}
                                  onChange={handleChange}
                                />
                              </span>
                            </span>
              
               
                            <div className="remember-and-forget-container">
                              <div className="remember-container">

                              <input type="checkbox" name="termAccecpted"/>
                              <p> Remember me </p>
                              </div>

                              <Link to = {"#"}>Forgot password?</Link>
                            </div>
                            <SubmitButton text={"Sign In"}/>
                          </form>
                        </div>
            <SwitchOption text={"Don't have an account? "} action={"Create an Account"} routeName={"/"}/>
          </div>
        </div>
    </>
  )
}

export default Login