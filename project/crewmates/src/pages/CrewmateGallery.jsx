import React, { useEffect, useState } from "react";
import "./CrewmateGallery.css"
import { supabase } from "../client";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const CrewmateGallery = () => {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        try {
            const fetchCrewmates = async () => {
                const {data} = await supabase
                    .from('crewmates')
                    .select()
                    .order('created_at', {ascending: true});

                setCrewmates(data);
            };
            fetchCrewmates();

        } catch (e) {
            console.error("Error fetching crewmates: ", e);
        }
    }, [crewmates]);
    return (
        <>
            <div className="gallery-container">
                <h1>Crewmate Gallery</h1>
                <div>
                    {crewmates && crewmates.length > 0 ?
                        <div className="gallery-content">
                            {crewmates.map((item) => (
                                <Card
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    speed={item.speed}
                                    color={item.color}
                                />
                            ))}
                        </div> :

                        <div className="no-crewmates-container">
                            <p>You haven't made a crewmate yet!</p>
                            <br />
                            <Link to="/create-crewmate" className="create-btn">Create a Crewmate</Link>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default CrewmateGallery;