import React from "react";
// eslint-disable-next-line no-unused-vars
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";

function Navbar(){

    // eslint-disable-next-line no-unused-vars
    const isAuthenticated = ApiService.isAuthenticated();
    // eslint-disable-next-line no-unused-vars
    const isAdmin = ApiService.isAdmin();
    // eslint-disable-next-line no-unused-vars
    const isUser = ApiService.isUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        const isLogout = window.confirm('Are you sure you want to logout this user?');
        if (isLogout) {
            ApiService.logout();
            navigate('/home');
        }
    };


    return (
       <nav className="navbar">

        <div className="navbar-brand">
            <NavLink to="/home"> Dark Blue Hotel</NavLink>

        </div>
        <ul className="navbar-ul">
            <li><NavLink to="/home" activeclassname="active">Home</NavLink></li>
            <li><NavLink to="/rooms" activeclassname="active">Rooms</NavLink></li>
            <li><NavLink to="/find-booking" activeclassname="active">Find my Booking</NavLink></li>

            {isUser && <li><NavLink to="/profile" activeclassname="active">Profile</NavLink></li>}
            {isAdmin && <li><NavLink to="/admin" activeclassname="active">Admin</NavLink></li>}

            {!isAuthenticated &&<li><NavLink to="/login" active class="active"> Login</NavLink></li>}
            {!isAuthenticated &&<li><NavLink to="/register" active class="active">Register</NavLink></li>}

            {isAuthenticated && (
    <li onClick={handleLogout} style={{cursor: "pointer"}}>Logout</li>
)}
        </ul>
       </nav>
    );
}



export default Navbar;