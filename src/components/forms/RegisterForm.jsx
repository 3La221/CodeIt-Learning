import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'



const RegisterForm = () => {
  const navigate = useNavigate()


  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    level: ''
  });

  const [passwordError, setPasswordError] = useState('');

  const handlSubmit = (e) =>{

    if (formData.password !== formData.repeatPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    e.preventDefault()
    const data = {
      first_name : formData.firstName,
      last_name : formData.lastName,
      email : formData.email,
      password : formData.password,
      numero_tel : formData.numero_tel,
      niveau : formData.level
    }

    axios
        .post(`https://ai2dz.com/CodeItBack/api/register/`,data)
        .then((res) => {
            localStorage.setItem("auth",JSON.stringify({
                access : res.data.access,
                refresh : res.data.refresh,
                user_id : res.data.id 
            }))
            navigate('/')
        })
        .catch((err)=>{
            console.log('err',err.request.response)
        })



    console.log("DATA : ", data)
  }

  return (
    <div>
      <div>
      <form className="max-w-md mx-auto" onSubmit={handlSubmit}>
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" onChange={(e)=>{
        setFormData({...formData,email:e.target.value})
      }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#35374B] peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#50727B] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="floating_password" id="floating_password" onChange={(e)=>{
        setFormData({...formData,password:e.target.value})
      }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#35374B] peer" placeholder=" " required />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#35374B] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mot de passe</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="repeat_password" id="floating_repeat_password"onChange={(e)=>{
        setFormData({...formData,repeatPassword:e.target.value})
      }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#35374B] peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#35374B] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirmer Mot de passe</label>
  </div>
  {passwordError && <p className="text-red-500">{passwordError}</p>}

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" onChange={(e)=>{
        setFormData({...formData,firstName:e.target.value})
      }}className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#35374B] peer" placeholder=" " required />
        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#35374B] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nom</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name"onChange={(e)=>{
        setFormData({...formData,lastName:e.target.value})
      }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#35374B] peer" placeholder=" " required />
        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#35374B]peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Prenom</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
   <div className="relative z-0 w-full mb-5 group">
    <input 
        type="tel" 
        pattern="[0-9]{10}" 
        name="floating_phone" 
        id="floating_phone" 
        onChange={(e) => {
            setFormData({...formData, phoneNumber: e.target.value})
        }} 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#35374B] peer" 
        placeholder=" " 
        required 
    />
    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#35374B]peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numéro de téléphone</label>
</div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_company" id="floating_company" onChange={(e)=>{
        setFormData({...formData,level:e.target.value})
      }}className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#35374B] peer" placeholder=" " required />
        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#35374B] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Niveau</label>
    </div>
  </div>
  <button type="submit" className="text-white bg-[#35374B] hover:bg-[#50727B] focus:ring-4
  focus:outline-none focus:ring-blue-300 font-medium 
  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">S'inscrire</button>
    <p className="mt-2 text-gray-500 text-sm">Vous avez déjà un compte? <a href="/login" className="text-blue-500">Connectez-vous</a>.</p>

</form>
    </div>
    </div>
  )
}

export default RegisterForm
