import  { useState, useEffect } from 'react';

const ZonaComentarios = () => {
  const [comentarios, setComentarios] = useState([]);
  const [texto, setTexto] = useState('');

  const obtenerComentarios = async () => {
    const res = await fetch('http://localhost:5000/comentarios');
    const data = await res.json();
    setComentarios(data);
  };

  const enviarComentario = async () => {
    if (texto.trim() === '') return;

    await fetch('http://localhost:5000/comentarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ texto }),
    });

    setTexto('');
    obtenerComentarios(); // recarga los comentarios
  };

  useEffect(() => {
    obtenerComentarios();
  }, []);

  return (
    <div>
      <h3>Comentarios</h3>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribí tu comentario..."
      />
      <button onClick={enviarComentario}>Enviar</button>

      <ul>
        {comentarios.map((c, i) => (
          <li key={i}>{c.texto}</li>
        ))}
      </ul>
    </div>
  );
};

export default ZonaComentarios;