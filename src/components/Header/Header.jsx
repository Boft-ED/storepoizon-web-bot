import React from "react";
import Button from "../Button/Button"
import { useTelegram } from "../../hooks/useTelegram";
import './Header.scss'
import Navbar from "../Navbar/Navbar";

const Header = () => {

    const { tg, user, onClose } = useTelegram();

    return (
        <div className="header">
            {/* <Button onClick={onClose}>закрыть</Button> */}
            <div className="header__content">
                <div className="header__username">
                    <span>
                        {user?.first_name}
                    </span>

                </div>
                <div className="header__burger">
                    <Navbar />
                </div>
            </div>
        </div>
    );
};

export default Header;