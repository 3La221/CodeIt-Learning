import CourseCard from "../CourseCard";
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Formations = () => {
  const [formations , setFormations] = useState([])

  useEffect ( () => {
    const fetchFormations = async () => {
      try {
        const res = await axios.get("https://ai2dz.com/CodeItBack/api/formation/")
        setFormations(res.data)
        console.log("DATA",res.data)
      }catch (error) {
        console.error('Error fetching courses:', error);
      }
    }

    fetchFormations()
  } ,[] )


  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="max-w-2xl  text-4xl font-extrabold text-[#35374B] my-8">Nos Formations</h1> 
      <div className="flex flex-wrap justify-center mb-8 gap-8 ">
        {
          formations.map( formation => (
            <CourseCard key={formation.id} formation={formation} />

          )
          )
        }

      </div>
    </div>
  );
};

export default Formations;
