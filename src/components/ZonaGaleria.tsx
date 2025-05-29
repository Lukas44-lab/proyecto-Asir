import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import foto1 from "../assets/local1.jpg";
import foto2 from "../assets/local2.jpg";
import foto3 from "../assets/local3.jpg";
import foto4 from "../assets/local4.jpg";

const ZonaGaleria = () => {
  const fotos = [foto1, foto2, foto3,foto4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="bg-dark text-white py-5">
      <div className="container text-center">
        <h2>Galería del Local</h2>
        <Slider {...settings} className="mt-4">
          {fotos.map((foto, index) => (
            <div key={index}>
              <img
                src={foto}
                alt={`Foto ${index + 1}`}
                className="img-fluid rounded"
                style={{ height: "400px", objectFit: "cover", width: "99%" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ZonaGaleria;
