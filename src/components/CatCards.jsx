import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CatCards = (props) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-center items-center p-4 w-64 h-64 transition duration-300 transform hover:scale-105 cursor-pointer">
      <FontAwesomeIcon icon={props.icon} size="4x" color='#35374B' />
      <h1 className='text-2xl font-bold text-[#35374B] my-4'>{props.title}</h1>
    </div>
  );
};

export default CatCards;
