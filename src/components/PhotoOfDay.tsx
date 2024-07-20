import axios from 'axios';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';

const PhotoOfDay: React.FC = () => {
    return (
        // Add your component logic here
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Calendar/>
            {/* <h1 className="text-center">Photo</h1> */}
            {}
        </div>
    );
};

export default PhotoOfDay;