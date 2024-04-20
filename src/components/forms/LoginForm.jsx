import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import axiosService from '../../helpers/axios';


const LoginForm = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [err,setErr] = useState('')
  const navigate = useNavigate()



  const handlSubmit = (e) => {


    e.preventDefault()
    const data = {
      email : formData.email,
      password : formData.password,
    }

    axios
        .post(`https://ai2dz.com/CodeItBack/api/login/`,data)
        .then((res) => {
            localStorage.setItem("auth",JSON.stringify({
                access : res.data.access,
                refresh : res.data.refresh,
                user_id : res.data.id
            }))
            const cookieValue = Cookies.get('formation');
            if(cookieValue){

              axiosService.post(`/subscribe/${cookieValue}/`)
            .then((res2)=>{
            navigate(`/formations/${res.data.id}/`)
            Cookies.remove('formation');

            })
          .catch((err2)=>{
            navigate(`/`)
            Cookies.remove('formation');

              })

            }else{
              navigate('/')
            }

        })
        .catch((err)=>{
            console.log('err',err.request.response)
            setErr(err.request.response)
        })


    console.log("DATA : ", data)


  }



  return (
    <div>
      

<form className="max-w-sm mx-auto" onSubmit={handlSubmit}>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" id="email" onChange={(e)=>{
      setFormData({...formData,email:e.target.value})
    }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-[#35374B] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de Passe</label>
    <input type="password" id="password" onChange={(e)=>{
        setFormData({...formData,password:e.target.value})
      }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-[#35374B] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
{err && <p className='text-[#FF0000] my-4'> Email ou Mot de passe incorrect </p>}
  
  <button type="submit" className="text-white bg-[#35374B] hover:bg-[#344955] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Connecter</button>
  <p className="mt-2 text-gray-500 text-sm">Vous n'avez pas de compte? <a href="/register" className="text-blue-500">Inscrivez-vous</a>.</p>

</form>


    </div>
  )
}

export default LoginForm
