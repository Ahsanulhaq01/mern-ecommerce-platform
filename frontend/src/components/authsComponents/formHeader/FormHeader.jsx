import './formheader.css';

function FormHeader({heading , text}) {
  return (
   <>
     <div className="registration-heading">
            <h2>{heading}</h2>
            <p>
              {text}
            </p>
          </div>

   </>
  )
}

export default FormHeader;