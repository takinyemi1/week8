import React, { useEffect, useState } from "react";
import "./DetailCrewmate.css";
import crewmatesImage from '../assets/crewmates.png';
import { supabase } from "../client";
import { replace, useNavigate, useParams } from "react-router-dom";

const DetailCrewmate = () => {
    const params = useParams();
    const [crewmate, setCrewmate] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCrewmate = async () => {
            const {data, error} = await supabase
                .from('crewmates')
                .select()
                .eq('id', params.id)
                .single();

            if (error) {
                console.log("Error fetching crewmate information: ", error);
            } else {
                setCrewmate(data);
            }
        }
        fetchCrewmate();
    }, [params.id]);

    const editCrewmate = () => {
        navigate(`/edit-crewmate/${params.id}`, {replace: true});
    };

    return (
        <>
            <div className="whole-page">
                <h1>Crewmate Details</h1>
                {crewmate && (
                    <>
                        <div className="crewmate-info">
                            <h2>Crewmate Name</h2>
                            <p>{crewmate.name}</p>
                        </div>

                        <br />
                        <h1 className="stats">Stats</h1>

                        <div className="crewmate-info">
                            <h2 className="stat-title">Crewmate Speed</h2>
                            <p>{crewmate.speed}</p>
                        </div>

                        <div className="crewmate-info">
                            <h2 className="stat-title">Crewmate Color</h2>
                            <p>{crewmate.color}</p>
                        </div>
                        <br />

                        <p>You may want to find a crewmate with more speed... this one is a bit slow! 😜</p>
                        <img src={crewmatesImage} alt="Crewmates" className="crewmates-img" />
                        <br /><br />
                        <button onClick={editCrewmate} className="edit-btn">Edit Crewmate</button>

                        <br /><br />
                    </>
                )}
            </div>
        </>
    )
}

export default DetailCrewmate;