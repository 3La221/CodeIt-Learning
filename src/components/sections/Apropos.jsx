import React from 'react'
import CatCards from '../CatCards'
import { faCode , faDumpster , faBullhorn } from '@fortawesome/free-solid-svg-icons';

const Apropos = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center my-12 gap-12'>
      <h1 className="max-w-2xl  text-4xl font-extrabold text-[#35374B] text-center">
      Découvrez notre variété de formations dans différents domaines</h1> 
        <div className='flex flex-wrap  justify-center items-center gap-8'>
            <CatCards icon={faCode} title="Informatique" />
            <CatCards icon={faDumpster}  title="Ecommerce"/>
            <CatCards icon={faBullhorn} title="Marketing" />

        </div>

    </div>
  )
}

export default Apropos
