import { FcGoogle } from "react-icons/fc";
import {
  FaGithub,
  FaUser,
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import "./signup.css";
import { useState } from "react";
import axiosInstance from "../../../utils/axioxInstance";
import { toast } from "react-toastify";

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


  // if (!name) {
  //   console.error("🚨 EMPTY NAME FOUND:", e.target);
  //   return;
  // }

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
          <div className="registration-heading">
            <h2>Create your account</h2>
            <p>
              Join Aura Essentials for member-exclusive releases and effortless
              order tracking.{" "}
            </p>
          </div>

          <div className="google-github-container">
            <div className="google-div">
              <button>
                <FcGoogle />
                <p>Google</p>
              </button>
            </div>
            <div className="github-">
              <button>
                <FaGithub />
                <p>Github</p>
              </button>
            </div>
          </div>

          <p className="text-for-email-registration">OR REGISTER WITH EMAIL</p>

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

              <div className="create-button-container">
                <button form="register-form" type="submit">
                  Create Account
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </div>

          <div className="sign-in-statment-contaniner">
            <p>Already have an account? </p>
            <a href="#">Sign in</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
