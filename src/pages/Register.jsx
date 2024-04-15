import RegisterForm from '../components/forms/RegisterForm'
import logo from '../assets/logo.png';
const Register = () => {
  return (
  
      <div className="flex flex-col items-center justify-center h-screen w-screen">
        <a href={"/"}>
        <img src={logo} className="h-12 mb-8" alt="Flowbite Logo" />
        </a>
      <div className="w-full max-w-md"> {/* Limiting the width of the form */}
        <RegisterForm />
      </div>
    </div>
    
  )
}

export default Register
