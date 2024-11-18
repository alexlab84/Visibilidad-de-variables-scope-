import  { useState } from 'react';

function NestedFunctionScope() {
  // Estado para almacenar el mensaje que se muestra
  const [nestedMessage, setNestedMessage] = useState('');

  // Función externa (outerFunction)
  const outerFunction = () => {
    // Variable definida en la función externa
    const outerVar = 'I am in the outer function';

    // Función interna (innerFunction)
    const innerFunction = () => {
      // Variable definida en la función interna
      const innerVar = 'I am in the inner function';
      // Accedemos a ambas variables y actualizamos el estado
      setNestedMessage(`${outerVar} and ${innerVar}`);
    };

    // Llamamos a la función interna
    innerFunction();
  };

  return (
    <div>
      <h2>Nested Function Scope Example</h2>
      {/* Botón para ejecutar la función externa */}
      <button onClick={outerFunction}>Show Nested Message</button>
      {/* Mensaje mostrado en pantalla */}
      <p>{nestedMessage}</p>
    </div>
  );
}

export default NestedFunctionScope;
