import React from 'react';
import { getUser } from '../../helpers/actions';
import axiosService from '../../helpers/axios';
import { useNavigate } from 'react-router-dom';

const ConfirmationModal = ({ closeConfirmationModal , id }) => {

    const user = getUser() 
    const navigate = useNavigate()
    const handlSubmit = () => {
        axiosService.post(`/subscribe/${id}/`)
        .then((res)=>{
            console.log("RES",res)

            navigate(`/formations/${user}`)
        })
        .catch((err)=>{
            window.location.reload();
        })
    }
    return (
        <div id="popup-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" onClick={closeConfirmationModal}  className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
                <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                {/* Change the path of the SVG to represent the check icon */}
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 10l3 3 6-6" />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Êtes-vous sûr de vouloir participer à cette formation?</h3>
                
                <button data-modal-hide="popup-modal" type="button" onClick={handlSubmit} className="text-white bg-[#35374B] hover:bg-[#344955] focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                    Confirmer
                </button>
                <button data-modal-hide="popup-modal" type="button" onClick={closeConfirmationModal} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#344955] focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Annuler</button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ConfirmationModal;
