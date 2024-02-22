import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/">Логотип</Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/login">Войти</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
