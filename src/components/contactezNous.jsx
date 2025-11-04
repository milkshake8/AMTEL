import { NavLink } from "react-router-dom";
const ContactezNous = () => {
  return (
    <section className="section">
      <div
        className="container bg-secondary rounded-lg shadow-lg text-center p-lg contact-fade"
        style={{
          color: "#fff",
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* --- Titre --- */}
        <h2
          className="mb-md"
          style={{
            fontWeight: "700",
            letterSpacing: "0.5px",
            color: "#fff",
          }}
        >
          N'hésitez pas à nous contacter !
        </h2>

        {/* --- Texte marketing --- */}
        <p
          className="mb-md"
          style={{
            fontSize: "1.1rem",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
            opacity: 0.95,
            color: "#fff",
          }}
        >
          Vous avez un projet en tête ? Notre équipe est prête à vous accompagner dès aujourd’hui. 
          Ne laissez pas vos idées attendre — transformez-les dès maintenant en solutions concrètes !
        </p>

        {/* --- Bouton CTA --- */}
        <NavLink to="/contact"> <button
          className="bg-light text-secondary rounded-md p-md shadow-md"
          style={{
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            transition: "all var(--transition-fast)",
          }}
          onMouseOver={(e) => (e.target.style.opacity = "0.85")}
          onMouseOut={(e) => (e.target.style.opacity = "1")}
        >
          Demander un devis
        </button></NavLink>
      </div>
    </section>
  );
};

export default ContactezNous;
