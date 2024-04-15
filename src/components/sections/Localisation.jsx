import React from 'react';
import CatCards from '../CatCards';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';


const Localisation = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center my-12 gap-12'>
      <h1 className="max-w-2xl  text-4xl font-extrabold text-[#35374B] text-center">
      Où nous trouver</h1> 
        <div className='flex flex-wrap justify-center items-center gap-8'>
            <CatCards icon={faLocationDot} title="Bab Ezzouar"  desc="avant l'universite USTHB"/>
            <CatCards icon={faLocationDot}  title="Birkhadem"/>
            <CatCards icon={faLocationDot} title="Ain nadja " />

        </div>

    </div>
  );
};

export default Localisation;
