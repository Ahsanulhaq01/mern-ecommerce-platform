import { FcGoogle } from 'react-icons/fc';
import {  FaGithub , FaUser  , FaEnvelope  , FaLock ,FaArrowRight} from 'react-icons/fa';
import './signup.css';

function SignUp() {
  return (
   <>
    <div className="signup-main-container">
    <div className="signup-container">
        <div className="registration-heading">
          <h2>Create your account</h2>
          <p>Join Aura Essentials for member-exclusive releases and effortless order tracking. </p>
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
              <FaGithub/>
              <p>Github</p>
             </button>
          </div>
        </div>

        <p className='text-for-email-registration'>OR REGISTER WITH EMAIL</p>

        <div className="user-data-container">
          <form action="#">

          <span className='full-name-contianer'>
          <label htmlFor="full-name-field">FULL NAME</label>
            <span className="full-name-field-with-icon">
              <p className='icon'><FaUser/></p>
              <input type="text"  id='full-name-field' placeholder='Alex Morgan'/>
            </span>
          </span>


          <span className='email-contianer'>
          <label htmlFor="email-field">EMAIL ADDRESS</label>
            <span className="email-field-field-with-icon">
              <p className='icon'><FaEnvelope/></p>
              <input type="text"  id='email-field-field' placeholder='alex@gmail.com'/>
            </span>
          </span>

          <span className='password-contianer'>
          <label htmlFor="passsword-field">PASSWORD</label>
            <span className="password-field-field-with-icon">
              <p className='icon'><FaLock/></p>
              <input type="password"  id='password-field-field' placeholder='12345'/>
            </span>
          </span>


          <span className='confirm-password-contianer'>
          <label htmlFor="confirm-passsword-field">CONFIRM PASSWORD</label>
            <span className="confirm-password-field-field-with-icon">
              <p className='icon'><FaLock/></p>
              <input type="password"  id='confirm-password-field-field' placeholder='12345'/>
            </span>
          </span>

            <div className="agree-statment-container">
              <input type="checkbox" />
              <p> I agree to the Terms of Service and Privacy Policy. </p>
            </div>

            <div className="create-button-container">
              <button>Create Account
                <FaArrowRight/>
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
  )
}

export default SignUp