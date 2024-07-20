import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6 text-center">
                <h1><i><b>Lunapp</b></i></h1>
                <p>Welcome to Lunapp! Explore the wonders of the <span className="text-">space</span> with us.</p>
                <div className="row">
                    <div className="col-6 d-flex justify-content-end">
                        <Link className="btn btn-primary" to='/photoofday'>Look Photo of Day</Link>
                    </div>
                    <div className="col-6 d-flex justify-content-start">
                        <Link className="btn btn-primary" to='near'>Near Earth Objects</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;