import React from "react";
import './Router.css';
import { Link } from "react-router-dom";

const Router = () => {
    return (
        <>
            <div className="sidebar-container">
                <nav className="sidebar">
                    <ul className="sidebar-content">
                        <li className="sidebar-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/create-crewmate">Create a Crewmate</Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/gallery">Crewmate Gallery</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )   
}

export default Router;