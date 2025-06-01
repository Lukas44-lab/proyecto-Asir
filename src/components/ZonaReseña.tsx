import { useEffect, useState } from "react";
import FormularioResena from "./FormularioReseña";

type Resena = {
  nombre: string;
  texto: string;
  estrellas: number;
  fecha: string;
};

const ZonaResenas = () => {
  const [resenas, setResenas] = useState<Resena[]>([]);
  const [orden, setOrden] = useState("fecha");

  const cargarResenas = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/resenas?orden=${orden}`);
      const data = await res.json();
      setResenas(data);
    } catch (err) {
      console.error("Error al cargar reseñas", err);
    }
  };

  useEffect(() => {
    cargarResenas();
  }, [orden]);

  return (
    <section className="container my-5">
            <h2 className="mb-4">¡Déjanos tu reseña!</h2>

      {/*  formulario con función de recarga */}
      <FormularioResena onNuevaResena={cargarResenas} />
      <h2 className="mb-4">Reseñas de Clientes</h2>


      {/* parte de filtro */}
      <select
        className="form-select my-3 w-auto"
        value={orden}
        onChange={(e) => setOrden(e.target.value)}
      >
        <option value="fecha">Más recientes</option>
        <option value="puntuacion">Mejor puntuadas</option>
      </select>

      {/* lista de reseñas */}
      <div className="resenas-box"
      style={{
        maxHeight: "400px",
        overflowY: "auto",
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        backgroundColor: "#f8f9fa",
      }}>
      {resenas.map((r, i) => (
        <div className="card mb-3" key={i}>
          <div className="card-body">
            <h5 className="card-title">{r.nombre}</h5>
            <p className="text-warning mb-1">{"⭐️".repeat(r.estrellas)}</p>
            <p className="card-text">"{r.texto}"</p>
            <small className="text-muted">{new Date(r.fecha).toLocaleDateString()}</small>
          </div>
        </div>
      ))}
      </div>

    </section>
  );
};

export default ZonaResenas;
