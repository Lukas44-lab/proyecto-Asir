import { useState } from "react";

type Props = {
  onNuevaResena: () => void;
};

const FormularioResena = ({ onNuevaResena }: Props) => {
  const [nombre, setNombre] = useState("");
  const [texto, setTexto] = useState("");
  const [estrellas, setEstrellas] = useState(5);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nueva = { nombre, texto, estrellas };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/resenas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nueva),
      });

      if (res.ok) {
        setNombre("");
        setTexto("");
        setEstrellas(5);
        onNuevaResena(); // recarga lista
      } else {
        alert("Error al enviar reseña");
      }
    } catch (err) {
      console.error("Error de red", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <textarea
        className="form-control mb-2"
        placeholder="Tu reseña"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        required
      />
      <select
        className="form-select mb-2"
        value={estrellas}
        onChange={(e) => setEstrellas(Number(e.target.value))}
      >
        {[5, 4, 3, 2, 1].map((n) => (
          <option key={n} value={n}>{n} estrella{n > 1 ? "s" : ""}</option>
        ))}
      </select>
      <button className="btn btn-primary" type="submit">Enviar reseña</button>
    </form>
  );
};

export default FormularioResena;
