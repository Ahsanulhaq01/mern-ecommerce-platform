import Login from './pages/Auth/login/Login';
import SignUp from './pages/Auth/signup/SignUp'
import {ToastContainer} from 'react-toastify';
import {Route ,Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <ToastContainer/>
    <Routes>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/' element={<SignUp/>}></Route>

    </Routes>
    </>
    
  )
}

export default App