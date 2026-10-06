import { FaArrowRight } from "react-icons/fa";
import "./submitButton.css";

function SubmitButton({ text }) {
  return (
    <>
      <div className="create-button-container">
        <button form="register-form" type="submit">
          {text}
          <FaArrowRight />
        </button>
      </div>
    </>
  );
}

export default SubmitButton;
