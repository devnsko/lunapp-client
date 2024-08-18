import Link from 'next/link';
// import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {

  // const [auth, setAuth] = useState(false);
  // const token = typeof window !== 'undefined' ? localStorage.getItem('jwtToken') : null;
  // const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;

  // useEffect(() => {
  //   if (token && userId) {
  //     setAuth(true);
  //   } else {
  //     setAuth(false);
  //   }
  // }, [token, userId]);



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
            {
              <div className='d-flex align-items-center'>
                  <Link className="link-dark link-offset-2 link-underline-opacity-25 mx-auto p-2" href="/login" role="button">Login</Link>
                  <Link className="link-dark link-offset-2 link-underline-opacity-25 mx-auto p-2" href="/register" role="button">Register</Link>
              </div>
            }
        </div>
        
      </nav>
    </header>
  );
};

export default Header;
