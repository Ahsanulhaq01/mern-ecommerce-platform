import { Link } from "react-router-dom"
import "./switchOption.css"

function SwitchOption({text  , action , routeName }) {
  return (
    <>
     <div className="sign-in-statment-contaniner">
            <p>{text}</p>
            <Link to={routeName}>{action}</Link>
          </div>
    </>
  )
}

export default SwitchOption