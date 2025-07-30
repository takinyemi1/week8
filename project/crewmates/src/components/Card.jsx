import React from "react";
import "./Card.css";
import { useNavigate, Link } from "react-router-dom";

const Card = ({id, name, speed, color}) => {
    const navigate = useNavigate();

    const editCrewmate = () => {
        navigate(`/edit-crewmate/${id}`, { replace: true });
    }
    return (
        <>
            <div className="crewmate-card" id={color}>
                <div className="card-content">
                    {/* id */}
                    <p className="crewmate-id"># {id}</p>
                    <h2 className="title">Crewmate Name <br /></h2>
                    <h3><span>{name}</span></h3>
                    <h2 className="title">Crewmate Speed <br /></h2>
                    <h3><span>{speed}</span></h3>
                    <h2 className="title">Crewmate Color <br /></h2>
                    <h3><span>{color}</span></h3>
                    <br /><br />
                </div>
                <div className="card-img-content">
                    <Link to={`/crewmate-details/${id}`} relative="path">
                        <img src="./src/assets/gen-crewmate.png" className="gen-crewmate-img" alt="General Crewmate Picture" />
                    </Link>
                    <p>Click on the image for a small surprise!</p>
                </div>
                    <button type="button" className="edit-btn" onClick={editCrewmate}>Edit Crewmate</button>
                <br />
            </div>
        </>
    )
}

export default Card;