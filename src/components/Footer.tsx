import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
        <nav className="navbar fixed-bottom bg-dark">
        <div className="d-flex justify-content-between container">
            <p className='p-2'>Lunapp is My Pet-Project on <a className="link-info" href="https://github.com/devnsko/lunapp-client" target="_blank">GitHub</a></p>
            <p className='p-2'>Using Official <a className="link-offset-2 link-underline-opacity-25 link-info" href="https://api.nasa.gov/" target="_blank">NASA APIs</a></p>
        </div>
        </nav>
        
    </footer>
  );
};

export default Footer;
