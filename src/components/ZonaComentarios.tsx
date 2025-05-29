import  { useState, useEffect } from 'react';

interface Comentario {
  nombre?: string;
  texto: string;
  fecha: string;
}

const ZonaComentarios = () => {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [nombre, setNombre] = useState<string>('');
  const [texto, setTexto] = useState<string>('');

  const formatearFecha = (fechaStr: string): string => {
    const fecha = new Date(fechaStr);
    return fecha.toLocaleString('es-AR', {
      dateStyle: 'short',
      timeStyle: 'short',
    });
  };

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
      body: JSON.stringify({ nombre, texto }),
    });

    setTexto('');
    obtenerComentarios(); // recarga los comentarios
  };

  useEffect(() => {
    obtenerComentarios();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Comentarios</h3>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
        />
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribí tu comentario..."
        />
        <button className="btn btn-primary" onClick={enviarComentario}>
          Enviar
        </button>
      </div>

      <ul className="list-group">
        {comentarios.map((c, i) => (
          <li key={i} className="list-group-item">
            <div><strong>{c.nombre || 'Anónimo'}:</strong> {c.texto}</div>
            <small className="text-muted">{formatearFecha(c.fecha)}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZonaComentarios;
