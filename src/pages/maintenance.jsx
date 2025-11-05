const Maintenance = () => {
  return (
    <section
      className="flex-center"
      style={{
        height: "100vh",
        flexDirection: "column",
        textAlign: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        marginTop: "7px",
        color: "#fff",
      }}
    >
      {/* --- Overlay bleu transparent --- */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(19, 36, 64, 0.85)",
          zIndex: 1,
        }}
      ></div>

      {/* --- Contenu principal --- */}
      <div
        className="p-lg rounded-lg shadow-lg"
        style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(6px)",
          zIndex: 2,
          maxWidth: "700px",
        }}
      >
        <h1
          className="mb-md"
          style={{
            fontSize: "3rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "var(--color-accent)",
          }}
        >
          Site en maintenance
        </h1>

        <p
          className="mb-lg"
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "#f3f4f6",
          }}
        >
          Notre site est actuellement en cours de mise à jour pour mieux vous
          servir. Nous travaillons activement à son amélioration et serons de
          retour très bientôt.
          <br />
          Merci de votre patience et de votre confiance 💙
        </p>

        <button
          className="bg-secondary text-light rounded-md p-md shadow-md"
          style={{
            border: "none",
            fontWeight: "600",
            cursor: "pointer",
            transition: "opacity var(--transition-fast)",
          }}
          onMouseOver={(e) => (e.target.style.opacity = "0.85")}
          onMouseOut={(e) => (e.target.style.opacity = "1")}
          onClick={() => window.location.reload()}
        >
          Rafraîchir la page
        </button>
      </div>
          <p
        style={{
          position: "absolute",
          bottom: "20px",
          fontSize: "0.9rem",
          opacity: 0.8,
          zIndex: 2,
        }}
      >
        © {new Date().getFullYear()} Amtel Technologie SARL — Cyborg Gen — Tous droits
        réservés.
      </p>
    </section>
  );
};

export default Maintenance;
