import { useState, useEffect } from 'react';
import Navbar from '../components/sections/Navbar';
import { useParams } from 'react-router-dom';
import { getUser } from '../helpers/actions';
import axiosService from '../helpers/axios';
import MyCourseCard from '../components/MyCourseCard';

const MesFormations = () => {
    const { profileId } = useParams();
    const userId = getUser();
    console.log("PROFILE ID ", profileId);
    console.log("USER ID ", userId);
    const [formations, setFormations] = useState([]);
    const handleUndo = (id) =>{
        console.log("OUTD")
        axiosService(`/delete_subscribe/${id}`)
        .then((res)=>{
            console.log(res)
            window.location.reload();


        })
        .catch((err)=>{

        })
    }
    useEffect(() => {
        const fetchFormations = async () => {
            try {
                const res = await axiosService.get("/subscribes/");
                setFormations(res.data);
                console.log("DATA", res.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchFormations();
    }, []);

    return (
        <div className='flex flex-col w-full gap-12 py-24'>
            <Navbar none={true} />
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Formation
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Localisation
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Confirme
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {formations.map(formation => (
                            <tr key={formation.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {formation.title} {/* Assuming 'name' is the property that holds the formation name */}
                                </td>
                                <td className="px-6 py-4">
                                    {formation.localisation}
                                </td>
                                <td className="px-6 py-4">
                                    {formation.confirmed ? (
                                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Confirme</span>
                                    ) : (
                                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">En attente de confimation</span>
                                    )}
                                </td>

                                { !formation.confirmed && <td>
                                <button type="button" onClick={()=>{handleUndo(formation.id)}} className="text-red-700 hover:text-white border border-red-700
                                hover:bg-red-800 focus:ring-4 focus:outline-none
                                focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 text-center 
                                dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" >Annuler</button>                     
                                </td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MesFormations;
