import {useState , useEffect} from 'react'
import Navbar from '../components/sections/Navbar'
import { useParams } from 'react-router-dom'
import { getUser } from '../helpers/actions'
import axiosService from '../helpers/axios';
import MyCourseCard from '../components/MyCourseCard';

const MesFormations = () => {
    const {profileId} = useParams()
    const userId = getUser()
    console.log("PROFILE ID " , profileId)
    console.log("USER ID ", userId)
    const [formations , setFormations] = useState([])

    
    useEffect ( () => {
    const fetchFormations = async () => {
        try {
        const res = await   axiosService.get("/subscribes/")
        setFormations(res.data)
        console.log("DATA",res.data)
        }catch (error) {
        console.error('Error fetching courses:', error);
        }
    }

    fetchFormations()
    } ,[] )

  return (
    <div className='flex flex-col w-full gap-12 py-24'>
        <Navbar none = {true} />
        <div className="flex flex-wrap justify-center gap-8  ">
        {
          formations.map( formation => (
            <MyCourseCard key={formation.id} formation={formation}   />

          )
          )
        }

      </div>
    </div>
  )
}

export default MesFormations
