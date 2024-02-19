import React from "react";
import { FaCaretUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <Link to="/">
            <div className="navbar">
                <FaCaretUp className="icon" size="75px" />
                <h1>
                    {" "}
                    Delta <span className="purple">Coin</span>
                </h1>
            </div>
        </Link>
    );
};

export default Navbar;
