import './App.css';
import Testimonio from './components/Testimonio.jsx';
import Contador from './components/Contador.jsx';
import CalculadoraReact from './components/CalculadoraReact';

function App() {
  return (
    <div className="App">
      {/* <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los alumnos de la freeCodCamp</h1>
        <Testimonio 
          nombre='emma'
          pais='Suecia'
          cargo='Ingeniera'
          empresa='Spotify'
          imagen='emma'
          testimonio='hoal que tal como estas, en esta oprtinundad para comentarles mis expereriencias en esta empresa jejejeje'
        />
      </div> 
      
      <Contador />
      */}
      <CalculadoraReact />
    </div>
  );
}

export default App;
