import React, { useState, useEffect } from 'react';

const App = () => {
  const [color, setColor] = useState('');

  useEffect(() => {
    const savedColor = localStorage.getItem('color');
    if (savedColor) {
      setColor(savedColor);
    }
  }, []);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSaveColor = () => {
    localStorage.setItem('color', color);
    alert('Color guardado en localStorage');
  };

  return (
    <div>
      <h1>Formulario de Color</h1>
      <input type="text" value={color} onChange={handleColorChange} />
      <button onClick={handleSaveColor}>Guardar Color</button>
    </div>
  );
};

export default App;
