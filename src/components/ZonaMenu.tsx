import espressoImg from '../assets/CafeEspresso.jpg';
import americanoImg from '../assets/CafeAmericano.webp';
import latteImg from '../assets/CafeLatte.jpg';
import frappeImg from '../assets/CafeFrappe.jpg';
import capuccinoImg from '../assets/CafeCapuccino.jpg';
import teVerdeImg from '../assets/te-verde.jpg';
import croissantImg from '../assets/croissants.jpg';
import tostadasImg from '../assets/tostadas.jpg';
import tartaImg from '../assets/tarta.jpg';
import teNegroImg from '../assets/te-negro.jpg';
import teRojoImg from '../assets/te-rojo.jpg';
import chocolatadaImg from '../assets/Chocolate_milk.jpeg';

console.log("Capuccino:", capuccinoImg);

const ZonaMenu =()=>{
   const menuItems = [
    { nombre: "Café Espresso", precio: "€1.50", imagen: espressoImg },
    { nombre: "Café Americano", precio: "€2.00", imagen: americanoImg },
    { nombre: "Frappe", precio: "€2.80", imagen: frappeImg },
    { nombre: "Café Latte", precio: "€2.50", imagen: latteImg },
    { nombre: "Capuccino", precio: "€2.80", imagen: capuccinoImg },
    { nombre: "Chocolatada", precio: "€2.00", imagen: chocolatadaImg },
    { nombre: "Té Rojo", precio: "€2.50", imagen: teRojoImg },
    { nombre: "Té Negro", precio: "€2.50", imagen: teNegroImg },
    { nombre: "Té Verde", precio: "€2.50", imagen: teVerdeImg },
    { nombre: "Croissant", precio: "€1.80", imagen: croissantImg},
    { nombre: "Tostadas con Tomate", precio: "€3.50", imagen: tostadasImg },
    { nombre: "Tarta casera", precio: "€3.00", imagen: tartaImg },
  ];

  return(
    
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>Menú</h2>
          <div className="row mt-4">
            {menuItems.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                   <img
                     src={item.imagen}
                     alt={item.nombre}
                     className="card-img-top"
                     style={{ objectFit: "cover", height: "200px" }}
                   />
                  <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text text-muted">{item.precio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
export default ZonaMenu