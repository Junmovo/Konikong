import React from 'react';
import { ClipLoader } from 'react-spinners';

const CharacterLoading = () => {
  return (
    <div className="w-full h-full absolute bg-[rgba(255,255,255) blur-sm] left-0">
      <ClipLoader color="#425ad5" cssOverride={{ position: 'absolute' }} />
    </div>
  );
};

export default CharacterLoading;
