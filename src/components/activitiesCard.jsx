import {NavLink} from "react-router-dom";
import camera2 from "../css/css/assets/images/camera-surveillance2.jpg";
import domotique2 from "../css/css/assets/images/domotique2.png";
import panneaux2 from "../css/css/assets/images/panneau-solaire2.jpeg";
import fournitures from "../css/css/assets/images/fournitures2.jpg";
import systemes from "../css/css/assets/images/system.png";
import formations from "../css/css/assets/images/Formations.png";

export default function ActivitiesCard() {
    return (
        <div>
            <h1 className="flex-center" style={{marginTop:"37px"}}>Nos activites</h1>
            <div className="flex-center" style={{marginTop:"-23px"}}><div className="separateur "></div></div>
            <div className="container"> 
            <div className="grid grid-3">
                <div className="card">
                    <div className="card-header">Equipementier</div>
                    <div>
                        <img src={fournitures} alt="Image de la carte" loading="lazy" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "inherit"}} />
                    </div>
                    <div className="card-body">
                        <p>Achat et approvisionnement certifiés : parc informatique, fibre optique, solutions énergétiques, électroménager pro. Livraison & installation.</p>
                    </div>
                    <div className="card-footer text-center">
                        <NavLink to="/services/equipementier"><button className="btn btn-secondary btn-lg">Details <i className="fa-solid fa-arrow-right"></i></button></NavLink>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">Intégration systèmes</div>
                    <div>
                        <img src={systemes} alt="Image de la carte" loading="lazy" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "inherit"}} />
                    </div>
                    <div className="card-body">
                        <p>Intégration IT : audit, architecture, déploiement réseaux, serveurs, virtualisation, cybersécurité, cloud, logiciels métiers. <br /><br /></p>
                    </div>
                    <div className="card-footer text-center">
                        <NavLink to="/services/integration-systemes"><button className="btn btn-secondary btn-lg">Details <i className="fa-solid fa-arrow-right"></i></button></NavLink>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">Sécurité</div>
                    <div>
                        <img src={camera2} alt="Image de la carte" loading="lazy" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "inherit"}} />
                    </div>
                    <div className="card-body">
                        <p>Sécurisez vos sites : caméras IP, NVR, alarmes, contrôle d’accès, interphonie. Étude, pose, maintenance. <br /><br /></p>
                    </div>
                    <div className="card-footer text-center">
                        <NavLink to="/services/securite-domotique"><button className="btn btn-secondary btn-lg">Details <i className="fa-solid fa-arrow-right"></i></button></NavLink>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">Domotique</div>
                    <div>
                        <img src={domotique2} alt="Image de la carte" loading="lazy" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "inherit"}} />
                    </div>
                    <div className="card-body">
                        <p>Domotique : automatisation des éclairages, gestion du confort thermique, contrôle d’accès, vidéosurveillance, alarmes connectées, pilotage à distance et intégration intelligente des équipements.</p>
                    </div>
                    <div className="card-footer text-center">
                        <NavLink to="/services/securite-domotique"><button className="btn btn-secondary btn-lg">Details <i className="fa-solid fa-arrow-right"></i></button></NavLink>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">Energie</div>
                    <div>
                        <img src={panneaux2} alt="Image de la carte" loading="lazy" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "inherit"}} />
                    </div>
                    <div className="card-body">
                        <p>Solutions énergétiques : dimensionnement PV, onduleurs, batteries, hybrides, groupes électrogènes, monitoring & maintenance. <br /><br /><br /></p>
                    </div>
                    <div className="card-footer text-center">
                        <NavLink to="/services/energie"><button className="btn btn-secondary btn-lg">Details <i className="fa-solid fa-arrow-right"></i></button></NavLink>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-header">Formations</div>
                    <div>
                        <img src={formations} alt="Image de la carte" loading="lazy" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "inherit"}} />
                    </div>
                    <div className="card-body">
                        <p>Formations : accompagnement technique et pratique sur les solutions informatiques, systèmes de sécurité, énergies renouvelables et domotique, avec transfert de compétences et certification à la clé.</p>
                    </div>
                    <div className="card-footer text-center">
                        <NavLink to="/services/formations"><button className="btn btn-secondary btn-lg">Details <i className="fa-solid fa-arrow-right"></i></button></NavLink>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
}
