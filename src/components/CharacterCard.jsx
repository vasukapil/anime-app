import React from 'react';
import HeartIcon from '../svgs/HeartIcon';
import RightArrow from '../svgs/RightArrow';

const CharacterCard = ({ character }) => {
  const { name, nicknames, favorites, images, url } = character;
  const handleNavigation = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center">
      <img
        src={images.jpg.image_url}
        alt={name}
        className="w-12 h-12 rounded-full m-5 border-2 border-slate-950"
      />

      <div className="flex-1">
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="text-gray-500 text-sm">{nicknames.join(', ')}</div>
      </div>

      <div className="text-red-600">
      <HeartIcon /> {favorites}
      </div>



      <div className="ml-4 cursor-pointer" onClick={handleNavigation}>
        <div className="w-8 h-8 border border-blue-500 flex items-center justify-center rounded">
          <RightArrow/>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
