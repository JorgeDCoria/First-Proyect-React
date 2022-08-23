import React from 'react';
import '../hojas-de-estilo/Cuenta.css'

export default function Cuenta({ numClics }){
  return(
    <div className='contador'>
      {numClics}
    </div>
  );
}