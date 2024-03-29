import React from "react";
import style from './../../css/add_friend.module.css';
import { Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Add_friend = ({userName}) => {
    return (
        <div className={style.add_friend}>
            
            <div className={style.header}>
                <Link to="/profile/friends">
                    <div className={style.back_button}></div>
                </Link>
                <div className={style.img}></div>
            </div>

            <div className={style.desc}>
                <div className={style.title}>
                    {userName}
                </div>
                <div className={style.subtitle}>
                    Покажи шарющему кентику, он поймёт, что надо делать...
                </div>

                <div className={style.qr_code}></div>
            </div>

            <Link to="/profile/add_friend_by_number">
                <div className={style.add_by_number}>
                    <button>Добавить по номеру</button>
                </div>
            </Link>

        </div>
    );
}

export default Add_friend;