import bis from "../css/css/assets/logos/bis.png";
import infractive from "../css/css/assets/logos/infractive.png";
import sonatel from "../css/css/assets/logos/logo-sonatel.svg";
import mtoa from "../css/css/assets/logos/MTOA.jpg";
import onu from "../css/css/assets/logos/ONUDC.png";
import orange from "../css/css/assets/logos/orange-logo.png";
import seeco from "../css/css/assets/logos/SEECO.png";
import solarcom from "../css/css/assets/logos/SOLARCOM.jpg";
import telenco from "../css/css/assets/logos/telenco.jpg";

const NosReferences = () => {
  const references = [
    { id: 1, logo: bis, name: "Banque Islamique du Sénégal" },
    { id: 2, logo: infractive, name: "infractive" },
    { id: 3, logo: mtoa, name: "mtoa" },
    { id: 4, logo: onu, name: "onu" },
    { id: 5, logo: sonatel, name: "Sonatel" },
    { id: 7, logo: orange, name: "Orange" },
    { id: 8, logo: seeco, name: "SEECO" },
    { id: 9, logo: solarcom, name: "Solarcom" },
    { id: 10, logo: telenco, name: "Telenco" },
  ];

  return (
    <section className="section bg-light">
      <div className="container text-center">
        <h2 className="text-primary mb-md">Nos Références</h2>
        <p>Nos partenaires qui nous ont fait confiance et qui en ont tiré totale satisfaction!</p>

        <div className="references-wrapper">
          <div className="references-track">
            {references.concat(references).map((ref, index) => (
              <div className="reference-item" key={index}>
                <img
                  src={ref.logo}
                  alt={ref.name}
                  title={ref.name}
                  loading="lazy"
                  style={{ height: "60px", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosReferences;
