import {  FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";
import './socialLogin.css'


function SocialLogin() {
  return (
    <>
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
    </>
  )
}

export default SocialLogin