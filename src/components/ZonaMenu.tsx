const ZonaMenu =()=>{
   const menuItems = [
    { nombre: "Café Espresso", precio: "€2.00" },
    { nombre: "Capuccino", precio: "€2.80" },
    { nombre: "Té Verde", precio: "€2.50" },
    { nombre: "Croissant", precio: "€1.80" },
    { nombre: "Tostadas con palta", precio: "€3.50" },
    { nombre: "Tarta casera", precio: "€3.00" },
  ];

  return(
    
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>Menú</h2>
          <div className="row mt-4">
            {menuItems.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
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