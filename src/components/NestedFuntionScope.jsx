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
    <div className="nested-function-scope">
      <h2 className="title">Nested Function Scope Example</h2>
      <button className="btn" onClick={outerFunction}>Show Nested Message</button>
      <p className="message">{nestedMessage}</p>
    </div>
  );
}

export default NestedFunctionScope;
