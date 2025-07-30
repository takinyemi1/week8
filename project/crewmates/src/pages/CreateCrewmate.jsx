import React, { useState } from "react";
import "./CreateCrewmate.css";
import { supabase } from "../client";

const CreateCrewmate = () => {
    const [input, setInput] = useState({
        "name": "",
        "speed": "",
        "color": "",
    });

    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple", "rainbow", "brown", "black"];
    
    const createCrewmate = async (e) => {
        e.preventDefault();
        var inputSpeed = isNaN(input["speed"]) ? 0 : parseInt(input["speed"]);
        var inputColor = input["color"] === "" ? "black" : input["color"];

        await supabase
            .from('crewmates')
            .insert({name: input['name'], speed: inputSpeed, color: inputColor});

        setInput({
            "name": '',
            "speed": '',
            "color": '',
        });

        alert("Crewmate created successfully!");
    }

    const handleChange = (e) => {
        setInput((prevInput) => ({
            ...prevInput,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>
            <div className="whole-page">
                <h1>Create a New Crewmate</h1>
                <br />
                <img src="./src/assets/among-us-full.png" alt="Among Us Crewmates" className="crewmates-img" />

                <br /><br />
                <div className="form-container">
                    <div className="input-container">
                        <label htmlFor="name">Crewmate Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter Crewmate Name" onChange={handleChange} value={input["name"]} />
                    </div>

                    <div className="input-container">
                        <label htmlFor="speed">Crewmate Speed</label>
                        <input type="text" id="speed" name="speed" placeholder="Enter Speed (mph)" onChange={handleChange} value={input["speed"]} />
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
                                        checked={input["color"] == color}
                                        onChange={handleChange}
                                    />
                                        {color}
                                </li>
                            ))    
                        }
                        {/* <input type="radio" id="color" name="color" /> */}
                    </div>
                    <button className="create-crewmate-btn" onClick={createCrewmate}>Create Crewmate</button>
                </div>
            </div>
        </>
    )
}

export default CreateCrewmate;