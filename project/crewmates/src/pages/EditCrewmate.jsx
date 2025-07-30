import React, { useEffect, useState } from "react";
import "./EditCrewmate.css";
import crewmates from "../assets/among-us-full.png";
import { supabase } from "../client";
import { useNavigate, useParams } from "react-router-dom";

const EditCrewmate = ({id}) => {
    const params = useParams();
    const [input, setInput] = useState({
        "name": "",
        "speed": "",
        "color": "",
    });

    const [crewmate, setCrewmate] = useState(null);
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple", "rainbow", "brown", "black"];
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
                setInput({
                    name: data.name || '',
                    speed: data.speed || '',
                    color: data.color || '',
                });
            }
        };
        fetchCrewmate();
    }, [params.id]);

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const updateCrewmate = async (e) => {
        e.preventDefault();

        var inputSpeed = isNaN(parseFloat(input["speed"])) ? 0.0 : parseFloat(input["speed"])
        var inputColor = input["color"] === "" ? "White" : input["color"]

        const {error} = await supabase
            .from('crewmates')
            .update({name: input.name, speed: inputSpeed, color: inputColor})
            .eq('id', params.id);

            if (error) {
                alert("Failed to update crewmate information.");
                console.log(error);
            } else {
                alert("Crewmate information is successfully updated!");
                navigate('/gallery', {replace: true});
        }
    }

    const deleteCrewmate = async (e) => {
        await supabase
            .from('crewmates')
            .delete()
            .eq('id', params.id);

        alert("Crewmate has been deleted successfully!");
        navigate('/gallery', {replace: true});
    };

    return (
        <>
            <div className="whole-page">
                <h1>Edit Your Crewmate</h1>
                <img src={crewmates} alt='Among Us Crewmates' className='gen-crewmate-img' />
                
                <div>
                    <h2 className="title">Current Crewmate Information</h2>
                    {crewmate && (
                        <div className="form-container">
                            <div className="input-container">
                                <label htmlFor="name">Crewmate Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter Crewmate Name" onChange={handleChange} value={input.name} />
                            </div>

                            <div className="input-container">
                                <label htmlFor="speed">Crewmate Speed</label>
                                <input type="text" id="speed" name="speed" placeholder="Enter Speed (mph)" onChange={handleChange} value={input.speed} />
                            </div>

                            <div className="input-container">
                                <label htmlFor="color">Crewmate Color</label>
                                {colors &&
                                    colors.map((color) => (
                                        <li key={color}>
                                            <input type="radio"
                                                id={color}
                                                name="color"
                                                value={color}
                                                checked={input.color == color}
                                                onChange={handleChange}
                                            />
                                                {color}
                                        </li>
                                    ))    
                                }
                                {/* <input type="radio" id="color" name="color" /> */}
                            </div>
                        </div>
                    )}
                </div>

                <br /><br />
                {/* buttons */}
                <div className="action-btns">
                    <button type="submit" className="update-btn" onClick={updateCrewmate}>Update Crewmate</button>
                    <button type="submit" className="delete-btn" onClick={deleteCrewmate}>Delete Crewmate</button>
                </div>
            </div>
        </>
    )
}

export default EditCrewmate;