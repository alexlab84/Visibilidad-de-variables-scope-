import  { useState } from 'react';

function LoopScopeDemo() {
  // Estado para mostrar el mensaje
  const [loopMessage, setLoopMessage] = useState('');

  // Función que usa 'var' en un bucle
  const handleVarLoop = () => {
    // 'var' tiene un alcance de función, no de bloque
    for (var i = 0; i < 3; i++) {
      // Debido al alcance de 'var', al ejecutarse el setTimeout, 'i' ya será 3
      setTimeout(() => setLoopMessage(`Var Loop: i = ${i}`), 1000);
    }
  };

  // Función que usa 'let' en un bucle
  const handleLetLoop = () => {
    // 'let' tiene un alcance de bloque, mantiene el valor correcto de 'j'
    for (let j = 0; j < 3; j++) {
      // 'j' conserva su valor en cada iteración
      setTimeout(() => setLoopMessage(`Let Loop: j = ${j}`), 1000);
    }
  };

  return (
    <div>
      <h2>Loop Scope Example</h2>
      {/* Botones para ejecutar cada función */}
      <button onClick={handleVarLoop}>Run Loop with var</button>
      <button onClick={handleLetLoop}>Run Loop with let</button>
      {/* Mensaje mostrado en pantalla */}
      <p>{loopMessage}</p>
    </div>
  );
}

export default LoopScopeDemo;
