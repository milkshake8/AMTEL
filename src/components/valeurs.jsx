export default function Valeurs() {
    return (
        <div className="valeurs containter flex">
            <div>
                <h2>Nos valeurs</h2>
                <div className="separateur"></div>
            </div>
            <div className="grid grid-3" style={{marginRight:"15px"}}>
                <div className="card">
                    <div className="card-header">Respect</div>
                    <div className="card-body">
                        <p>Nous plaçons le respect au cœur de nos relations avec nos clients, partenaires et collaborateurs. Chaque projet est mené dans un esprit d’écoute, de transparence et de considération mutuelle.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Engagement</div>
                    <div className="card-body">
                        <p>Nous nous engageons à offrir des solutions fiables et performantes, dans le respect des délais et des exigences de qualité. Notre priorité : la satisfaction totale du client à chaque étape du projet.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Intégrité</div>
                    <div className="card-body">
                        <p>Nous agissons avec honnêteté et responsabilité dans toutes nos actions. L’intégrité guide nos décisions et renforce la confiance que nos clients nous accordent au quotidien.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}