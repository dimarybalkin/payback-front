import React from "react";
import style from './../../css/profile.module.css';
import { Route, Routes } from "react-router-dom";
import User_groups from "./user_groups.jsx";
import Footer from "./footer.jsx";
import { useNavigate } from "react-router-dom";

const Profile = ({ isLoggedIn, setIsLoggedIn, userName }) => {
    const navigate = useNavigate();
    return (

        isLoggedIn ?
        <div className={style.profile}>
            <Routes>
                <Route path="user_groups" element={<User_groups userName={userName}/>} />
            </Routes>
            
            <Footer />
        </div>
        : navigate("/", { replace: true })
    );
}

export default Profile;