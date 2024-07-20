import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className='justify-content-center'>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid ">
                    <NavLink className="navbar-brand" to="/">Lunapp</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active" aria-current="page" to="/photoofday">PhotoOfDay</NavLink>
                        <NavLink className="nav-link" to="/near">NearEarth</NavLink>
                        <NavLink className="nav-link disabled" aria-disabled="true" to="#">Other APIs</NavLink>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;