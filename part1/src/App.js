import './App.css';
import './Mensaje.js';
import Mensaje from './Mensaje.js';


const Hola = () =>{
  return(
    <h1>Hola!!!</h1>
  )
}

  function App(){
    return (
    <div>
      <Hola />
      <Mensaje name="Gaston" surname="Belio" color="blue"/>
    </div>
    )
    };

export default App;
