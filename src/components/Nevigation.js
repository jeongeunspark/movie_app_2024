import React from "react";
import { Link } from "react-router-dom";
import './Nevigation.css'

function Nevigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Nevigation;