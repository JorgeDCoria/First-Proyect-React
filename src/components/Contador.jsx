import React, {useState} from 'react'
import Logo from '../Imagenes/Contador-Imagenes/logo192.png';
import '../hojas-de-estilo/Contador.css';
import Boton from './Boton.jsx';
import Cuenta from './Cuenta';
export default function Contador (){
    const [numClics, setNumClics] = useState(0);
    const manejarClic= () => {
        setNumClics((numClics)=> numClics+1);
    };

    const reiniciarContador= ()=>{
        setNumClics((numClics)=> numClics=0)
    };
    return(
        <div className='contador-contenedor'>
            <div className='contador-contenedor-logo'>
                <img 
                    src={Logo} 
                    alt="logo de app"
                    className='contador-log'
                     />
            </div>
            <div className='contador-contenedor-two'>
                <Cuenta numClics={numClics} />
                <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic}/>
                <Boton texto={"Reiniciar"} esBotonDeClic={false} manejarClic={reiniciarContador}/>
            </div>
        </div>
    );
}