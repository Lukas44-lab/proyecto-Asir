import esparteroImg from '../assets/LogoCafe.png'
const ZonaSobreNosotros =()=>{
  return(
  <section className="container my-5 text-center">
    <section className="bg-white py-5">
     <div className="container">
      <h2 className="text-center mb-4">Sobre nosotros</h2>
        <div className="row align-items-center">
      
         <div className="col-md-6">
            
          <img src={esparteroImg} alt="Foto del local" className="img-fluid rounded shadow" />
          </div>

          <div className="col-md-6">
           <p >
               Somos una cafetería de barrio con espíritu artesanal. Desde 2018,
               servimos café de especialidad, pastelería casera y buena onda.
            </p>
            <p>
                Creemos en el comercio justo, el respeto por el origen de los ingredientes
                y la importancia de hacer comunidad en torno a una buena taza.
            </p>
          </div>
        </div>
    </div>
  </section>

  </section>
      
)
}
export default ZonaSobreNosotros