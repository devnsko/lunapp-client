import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
        <nav className="navbar" style={{ backgroundColor: '#e3f2fd' }}>
        <div className="d-flex justify-content-between container">
            <div className='d-flex align-items-center'>
                <Link className="btn btn-dark mx-auto p-2" href="/" role="button">Lunapp</Link>
                <div>
                    <Link className="link-dark link-offset-2 link-underline-opacity-25 mx-auto p-2" href="/photoofday" role="button">Apod</Link>
                    <Link className="link-dark link-offset-2 link-underline-opacity-25 mx-auto p-2" href="/near?year=2020" role="button">Neo</Link>
                </div>
            </div>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Not working!" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        
      </nav>
    </header>
  );
};

export default Header;
