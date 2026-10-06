import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import "./signup.css";
import { useState } from "react";
import axiosInstance from "../../../utils/axioxInstance";
import { toast } from "react-toastify";
import FormHeader from "../../../components/authsComponents/formHeader/FormHeader";
import SocialLogin from "../../../components/authsComponents/socialLogin/SocialLogin";
import OptionForEmail from "../../../components/authsComponents/optionForEmail/OptionForEmail";
import SwitchOption from "../../../components/authsComponents/switchLogin_and_register/SwitchOption";
import SubmitButton from "../../../components/authsComponents/submitButton/SubmitButton";

function SignUp() {
  const [showPassword , setShowPassword] = useState(true);
  const [showConfirmPassword , setShowConfirmPassword] = useState(false);
  const [formData , setFormData] = useState({
    userName : "",
    email : "",
    password : "",
    confirmPassword : ""
  })

 function handleChange(e) {
  const { name, value } = e.target;


  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
}

  async function handleSubmit(e){
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/users/register' , formData);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error?.response.data || error?.message);
      
    }
  }

  function toggleShowPasswordIcon(){
    setShowPassword(!showPassword);
  }

  function toggleShowConfirmPasswordIcon(){
      setShowConfirmPassword(!showConfirmPassword);
  }
  return (
    <>
      <div className="signup-main-container">
        <div className="signup-container">

          
          <FormHeader heading={"Create Your Account"} text={"Join Aura Essentials for member-exclusive releases and effortless order tracking. "}/>

         
          <SocialLogin/>

          
          <OptionForEmail text={"OR REGISTER WITH EMAIL"}/>

          <div className="user-data-container">
            <form onSubmit={handleSubmit} id="register-form">
              <span className="full-name-contianer">
                <label htmlFor="full-name-field">FULL NAME</label>
                <span className="full-name-field-with-icon">
                  <p className="icon">
                    <FaUser />
                  </p>
                  <input
                    type="text"
                    id="full-name-field"
                    placeholder="Alex Morgan"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                  />
                </span>
              </span>

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
                  <button type="button" className="showPasswordIcon" onClick={toggleShowPasswordIcon}>
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

              <span className="confirm-password-contianer">
                <label htmlFor="confirm-passsword-field">
                  CONFIRM PASSWORD
                </label>
                <span className="confirm-password-field-field-with-icon">
                  <p className="icon">
                    <FaLock />
                  </p>
                  <button type="button" className="showPasswordIcon" onClick={toggleShowConfirmPasswordIcon}>
                    {showConfirmPassword ? <FaEyeSlash/> : <FaEye/>}
                  </button>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm-password-field-field"
                    placeholder="12345"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </span>
              </span>

              <div className="agree-statment-container">
                <input type="checkbox" name="termAccecpted"/>
                <p> I agree to the Terms of Service and Privacy Policy. </p>
              </div>

              <SubmitButton text={"Create Account"}/>
            </form>
          </div>

          <SwitchOption text={"Already have an account? "} action={"sign in"} routeName={"/login"}/>
        </div>
      </div>
    </>
  );
}

export default SignUp;
