import  { useState } from 'react';

function ScopeDemo() {
  // Estado para mostrar el mensaje en pantalla
  const [message, setMessage] = useState('');

  // Función que demuestra el uso de una variable de alcance global
  const handleGlobalScope = () => {
    // 'var' permite crear variables con alcance global o de función
    var globalVar = 'I am in the global scope';
    // Actualizamos el estado con el valor de la variable
    setMessage(globalVar);
  };

  return (
    <div className="scope-demo">
      <h2 className="title">Scope Example: Global vs Local</h2>
      <button className="btn" onClick={handleGlobalScope}>Show Global Variable</button>
      <p className="message">{message}</p>
    </div>
  );
}

export default ScopeDemo;
