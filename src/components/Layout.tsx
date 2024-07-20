import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <div className="layout">
            <Header />
            <main className="layout-content">
                <Outlet />
            </main>
            <footer className="layout-footer fixed-bottom">
                <p>&copy; 2024 My Website</p>
            </footer>
        </div>
    );
};

export default Layout;