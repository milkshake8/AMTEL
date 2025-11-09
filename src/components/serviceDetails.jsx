import { NavLink } from "react-router-dom";


const ActivitiesDetails = ({service}) => {
    return (
        <>
            <div className="container">
                <div>
                    <h2>{service.title}</h2>
                 </div>
                <div>
                    <img id="service" src={service.img} alt={service.imgDescription} style={{borderRadius:"var(--radius-md)", marginBottom:"20px"}} />
                </div>
                <p dangerouslySetInnerHTML={{ __html: service.description }} />
                <div>
                    <NavLink to="/contact#contact"> 
                        <button
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
                        </button>
                    </NavLink>
                </div>

            </div>
        </>
    );
}

export default ActivitiesDetails;