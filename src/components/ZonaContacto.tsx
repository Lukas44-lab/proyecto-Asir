const ZonaContacto = () => {
  return (
    <section className="bg-light py-5">
      <div className="container ">
        <h2 className="text-center mb-4">📍 Dónde estamos & Contacto</h2>
        <div className="row">
          {/* Mapa */}
          <div className="col-md-6 mb-4 container center">
            <iframe
              title="Mapa Cafetería"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24301.630581680212!2d-3.7258945641511363!3d40.41541160170031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287e553b0603%3A0x4dbef72de213a732!2sCafeter%C3%ADa%20Esparteros!5e0!3m2!1ses!2ses!4v1748524795810!5m2!1ses!2ses"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        {/* Información de contacto */}
        <div className="text-center mt-5">
          <p>📍 Calle de Esparteros 11, Madrid, España</p>
          <p>📞 +34 915 319 728</p>
          <p>📧 cafeAromas@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default ZonaContacto;
