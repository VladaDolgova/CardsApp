import React from "react";
import { Routes, Route } from "react-router-dom";
import History from './History';
import SocialSciense from './SocialSciense';
import Homepage from './Homepage';
import '../styles/Homepage.css'

const Subject = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/history" element={<History />} />
            <Route path="/socialScience" element={<SocialSciense />} />
        </Routes>
    );
}

export default Subject;
