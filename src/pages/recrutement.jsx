import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Aside from '../components/aside.jsx';
import aboutBanner from '../css/css/assets/images/bureau.webp';

const whatsappNumber = '221776198974';

const Recrutement = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    message: '',
  });
  const [cvFile, setCvFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    setCvFile(file || null);
  };

  const openWhatsAppWithText = (text) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!cvFile) {
      alert('Merci de joindre votre CV avant de soumettre votre candidature.');
      return;
    }

    setSubmitting(true);
    const baseMessage = [
      'Nouvelle candidature via le site AMTEL :',
      '',
      `Nom complet : ${formValues.fullName}`,
      `Email : ${formValues.email}`,
      `Telephone : ${formValues.phone}`,
      `Poste vise : ${formValues.role || 'Non precise'}`,
      '',
      'Message :',
      formValues.message || 'Non renseigne',
    ].join('\n');

    const cvSummary = `CV : ${cvFile.name} (${(cvFile.size / 1024).toFixed(
      1
    )} Ko)`;

    const canShareFile =
      typeof navigator !== 'undefined' &&
      navigator.canShare &&
      navigator.canShare({ files: [cvFile] });

    if (canShareFile) {
      try {
        await navigator.share({
          title: 'Candidature Amtel',
          text: `${baseMessage}\n\n${cvSummary}`,
          files: [cvFile],
        });
        setSubmitting(false);
        return;
      } catch (error) {
        console.error('Partage natif indisponible', error);
      }
    }

    openWhatsAppWithText(
      `${baseMessage}\n\n${cvSummary}\nMerci de joindre ce fichier manuellement dans WhatsApp.`
    );
    setSubmitting(false);
    alert(
      'WhatsApp est ouvert avec votre message. Merci de joindre votre CV directement dans la discussion.'
    );
  };

  return (
    <div className="about-page">
      <Helmet>
        <title>Recrutement - Amtel Technologies</title>
        <meta
          name="description"
          content="Rejoignez Amtel Technologies : envoyez votre candidature pour contribuer a des projets innovants en IT, securite et energie."
        />
        <link rel="canonical" href="https://amtel.sn/recrutement" />
        <meta property="og:title" content="Recrutement Amtel Technologies" />
        <meta
          property="og:description"
          content="Deposez votre candidature et rejoignez une equipe engagee pour transformer le numerique en Afrique."
        />
        <meta property="og:url" content="https://amtel.sn/recrutement" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Amtel Technologie" />
        <meta property="og:image" content="https://amtel.sn/logo-amtel.svg" />
      </Helmet>

      <section
        className="about-banner"
        style={{ backgroundImage: `url(${aboutBanner})`, marginTop: '6px' }}
      >
        <div className="about-banner__overlay">
          <h1
            style={{
              color: 'white',
              backgroundColor: '#259BAF',
              borderRadius: '11px',
              padding: '0 10px',
            }}
          >
            Rejoignez notre equipe
          </h1>
        </div>
      </section>

      <section className="section about-content">
        <div className="about-main">
          <article className="about-block recruitment-intro">
            <h2 className="text-primary mb-sm">Pourquoi Amtel Technologie ?</h2>
            <div className="separateur" style={{ width: '280px' }}></div>
            <p>
              Chez <strong>Amtel Technologie</strong>, nous croyons que chaque
              talent merite un environnement ou il peut apprendre, partager et
              impacter des projets concrets. Nous accompagnons des clients
              exigeants dans les domaines de l&rsquo;IT, de la securite des
              infrastructures et des energies renouvelables.
            </p>
            <p>
              En nous rejoignant, vous evoluerez au sein d&rsquo;une equipe
              passionnee, ou la rigueur, la creativite et l&rsquo;esprit
              d&rsquo;initiative sont valorises. Nous investissons dans la
              formation continue et proposons des parcours d&rsquo;integration
              personnalises pour chacune de nos recrues.
            </p>
          </article>

          <article className="about-block">
            <h2 className="text-primary mb-sm">Deposez votre candidature</h2>
            <div className="separateur" style={{ width: '320px' }}></div>
            <form className="recruitment-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="fullName">Nom complet *</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Ex : Mariama Ndiaye"
                    value={formValues.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="vous@exemple.com"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telephone *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+221 77 000 00 00"
                    value={formValues.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Poste souhaite *</label>
                  <select
                    id="role"
                    name="role"
                    value={formValues.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selectionner une option</option>
                    <option value="Ingenieur Systemes">Ingenieur systemes</option>
                    <option value="Technicien Energie">
                      Technicien energie solaire
                    </option>
                    <option value="Consultant IT">Consultant IT</option>
                    <option value="Commercial">Commercial / Business Developer</option>
                    <option value="Stage">Stage / Alternance</option>
                    <option value="Autre">Autre profil</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="cv">CV (PDF ou Word) *</label>
                <input
                  id="cv"
                  name="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                />
                <small className="cv-hint">
                  Le fichier sera encode et transmis avec votre message WhatsApp.
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Votre message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Dites-nous en plus sur votre projet professionnel..."
                  value={formValues.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={submitting}
                >
                  {submitting ? 'Preparation...' : 'Envoyer sur WhatsApp'}
                </button>
              </div>
            </form>
          </article>
        </div>

        <Aside />
      </section>
    </div>
  );
};

export default Recrutement;
