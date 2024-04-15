import test from '../assets/test.jpg'
import { getUser } from '../helpers/actions'
import { useState } from 'react'
import Modal from './modals/Modal'
import ConfirmationModal from './modals/ConfirmationModal'

const CourseCard = ({formation }) => {
    const user = getUser()

    console.log("KEY",formation.id)
    const [isOpen, setIsOpen] = useState(false);
    const [isCMlOpen , setIsCMlOpen] = useState(false)

    const openConfirmationModal = () =>{

        setIsCMlOpen(true)
    }

    const closeConfirmationModal = () =>{
        setIsCMlOpen(false)
    }

    const openModal = () => {

    setIsOpen(true);
};

    const closeModal = () => {
    setIsOpen(false);
};






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
        <div className='flex flex-col my-3'>
            <h3 className='font-bold'>Prix : {formation.cout}Da </h3>
            <h4>Localisation : {formation.localisation}</h4>
        </div>
        
        

        { user ?  <button  onClick={openConfirmationModal}   className="inline-flex
        items-center px-3 py-2 
        text-sm font-medium text-center text-white bg-[#35374B] 
        rounded-lg hover:bg-[#344955] focus:ring-4 focus:outline-none
        focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
        dark:focus:ring-blue-800">
            Participer
        </button> :  <a  href='/login/'   className="inline-flex items-center px-3 py-2 
        text-sm font-medium text-center text-white bg-[#35374B] 
        rounded-lg hover:bg-[#344955] focus:ring-4 focus:outline-none
        focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
        dark:focus:ring-blue-800">
            Participer
        </a> }
        <button onClick={openModal}  className="
        inline-flex items-center px-3 py-2 
        text-sm font-medium text-center text-white bg-[#35374B] 
        rounded-lg hover:bg-[#344955] focus:ring-4 focus:outline-none
        focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
        dark:focus:ring-blue-800 mx-3" type="button">
            Details 
        </button>
        {isOpen && <Modal closeModal={closeModal} desc={formation.desc} formation={formation.title} />}
        {isCMlOpen && <ConfirmationModal closeConfirmationModal={closeConfirmationModal}  id={formation.id}/>}
    </div>

    

</div>

  )
}

export default CourseCard
