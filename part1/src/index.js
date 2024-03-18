import ReactDOM from 'react-dom';
import {useState} from 'react'
const rootElement = document.getElementById('root');

const App = (props) => {
  const [contador, setContador] = useState(0)
  
  const handleClick = (operacion) => {
    
    setContador(prevContador =>{
      console.log(prevContador);
      return prevContador+operacion
    }) 
  }

  return (
    <div>
      <h1>Contador {contador} </h1>
      <button onClick={() => handleClick(+1)}>Incrementar</button>
      <button onClick={() => handleClick(-1)}>Decrementar</button>
    </div>
  )
};

ReactDOM.render(
  <App />,
  rootElement
);
