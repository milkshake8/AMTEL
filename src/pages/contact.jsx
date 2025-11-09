import contacts from "../css/css/assets/images/contacts.png";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Aside from "../components/aside";


const Contact = () => {
    const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    societe: "",
    objet: "",
    message: "",
  });

  // Gestion des champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   // Fonction pour WhatsApp
  const sendWhatsApp = () => {
    const { nom, telephone, societe, objet, message } = formData;
    const text = `*Bonjour Je vous ai contacté via votre site web* 👋
    
*Nom:* ${nom}
*Téléphone:* ${telephone}
*Société:* ${societe || "Non précisé"}
*Objet:* ${objet}
*Message:* ${message}`;
    const url = `https://wa.me/221776198974?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  // Fonction pour Email
  const sendEmail = () => {
    const { nom, telephone, societe, objet, message } = formData;
    const subject = encodeURIComponent(`Demande client - ${objet}`);
    const body = encodeURIComponent(
      `Nom : ${nom}\nTéléphone : ${telephone}\nSociété : ${societe}\n\nMessage :\n${message}`
    );
    window.location.href = `mailto:contact@amtel-technologie.com?subject=${subject}&body=${body}`;
  };

  // Validation minimale
  const isValid =
    formData.nom && formData.telephone && formData.objet && formData.message;

  return (
    <div>

        <Helmet>
            <title>Contact & Devis — Amtel Technologies — Fourniture, IT, Sécurité, Énergie à Dakar</title>
            <meta name="description" content="Expliquez-nous votre besoin. Réponse sous 24h ouvrées." />
            <link rel="canonical" href="https://amtel.sn/" />

            {/* Optionnel : SEO avancé */}
            <meta property="og:title" content="Entreprise XYZ — Solutions technologiques à Dakar" />
            <meta property="og:description" content="Intégrateur à Dakar : équipements, IT, sécurité & solaire." />
            <meta property="og:url" content="https://amtel.sn/" />
        </Helmet>

      {/* === SECTION HEADER === */}
      <section
              className="about-banner"
              style={{ backgroundImage: `url(${contacts})`, marginTop:"6px" }}
            >
              <div className="about-banner__overlay">
                <h1 style={{color:"white",backgroundColor:"#132440", borderRadius:"11px", padding:"0 35px"}}>Contacts</h1>
              </div>
            </section>

      {/* === SECTION CONTENU === */}
      <section
        className="section"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* === Colonne gauche === */}
        <div
          style={{
            flex: "1 1 75%",
            minWidth: "300px",
          }}
        >
          {/* --- Adresse + carte --- */}
          <h2 className="text-primary mb-md">Notre adresse</h2>

          <div className="container"><div
            className="rounded-md shadow-md mb-lg"
            style={{ overflow: "hidden", height: "300px" }}
          >
            <iframe
              title="Amtel Technologie - Localisation"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d482.2993321019018!2d-17.47062025902006!3d14.746781647998304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2ssn!4v1762357061172!5m2!1sfr!2ssn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div></div>

          <div
      className="p-lg bg-light rounded-lg shadow-md"
      style={{ maxWidth: "1000px", margin: "0 auto" }}
      id="contact"
    >
        {/* --- Formulaire --- */}
      <h2 className="text-primary mb-md text-center">Formulaire de contact</h2>

      <form>
        <div className="form-group">
          <label htmlFor="nom">Nom complet *</label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleChange}
          />
        </div>
         <div className="form-group">
          <label htmlFor="telephone">Téléphone *</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            required
            value={formData.telephone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="societe">Société</label>
          <input
            type="text"
            id="societe"
            name="societe"
            value={formData.societe}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="objet">Objet *</label>
          <input
            type="text"
            id="objet"
            name="objet"
            required
            value={formData.objet}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
      {/* --- Boutons d’envoi --- */}
      <div className="flex mt-md" style={{ gap: "1rem", justifyContent: "center" }}>
        <button
          className="bg-success text-light p-md rounded-md shadow-md"
          style={{
            border: "none",
            cursor: isValid ? "pointer" : "not-allowed",
            opacity: isValid ? "1" : "0.6",
          }}
          onClick={sendWhatsApp}
          disabled={!isValid}
        >
          Envoyer par WhatsApp
        </button>

        <button
          className="bg-secondary text-light p-md rounded-md shadow-md"
          style={{
            border: "none",
            cursor: isValid ? "pointer" : "not-allowed",
            opacity: isValid ? "1" : "0.6",
          }}
          onClick={sendEmail}
          disabled={!isValid}
        >
          Envoyer par e-mail
        </button>
      </div>
    </div>
        </div>

        {/* === Colonne droite (Aside) === */}
        <Aside />
      </section>
    </div>
  );
};

export default Contact;
