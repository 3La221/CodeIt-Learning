import React from 'react'
import test from '../assets/test.jpg'


const MyCourseCard = ({formation}) => {


  return (
    <div className="max-w-sm bg-white border border-gray-200
    rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    <a href="#">
        <img className="rounded-t-lg" src={`https://ai2dz.com/CodeItBack/${formation.image}`} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">{formation.title}</h5>
        </a>
        <div className='flex justify-end items-center'>
        <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
    {formation.localisation}
</span>

            {!formation.confirmed ? <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">en attente de confirmation
            </span> : <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Confirme</span>}
        </div>
    

    </div>

    

</div>)
}


export default MyCourseCard
