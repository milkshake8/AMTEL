import { NavLink } from 'react-router-dom';
import apropos from '../css/css/assets/images/apropos.webp';

export default function Apropos () {
    return (
        <>
         <div className="container flex flex-between bg-tertiary" style={{width: "100%", maxWidth: "1360px", marginTop: "-32px", padding: "64px"}}>
            <div>
            <img src={apropos} alt="A propos du groupe AMTEL technologies" loading="lazy" style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "11px",
              transition: "transform 0.4s ease-in-out",
            }} />
        </div>
            <div>
                <h1 className='text-center' style={{color: "white"}}>Qui Sommes-Nous?</h1>
                <p className='text-left' style={{width: "100%", maxWidth: "400px", color: "white"}}>Amtel Technologie SARL est une société de services innovante basée à Dakar et spécialisée dans la fourniture d’équipements, les solutions informatiques et l’intégration de systèmes, la sécurité et la domotique, ainsi que l’énergie photovoltaïque.
Grâce à un savoir-faire éprouvé et des processus centrés sur la satisfaction client, l’entreprise accompagne professionnels et particuliers dans la modernisation de leurs infrastructures.
Ses valeurs fondamentales — Respect, Intégrité et Engagement — guident chacune de ses actions pour offrir des solutions durables, performantes et adaptées aux besoins de chaque client.</p>
            <div>
                <NavLink to="/a-propos">
                  <button className="btn btn-secondary" style={{marginTop: "16px"}}>En Savoir Plus  <i className="fa-solid fa-arrow-right"></i></button>
                </NavLink>
            </div>
            </div>
         </div>
        </>
    );
}
