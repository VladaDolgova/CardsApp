import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
    const handleClick = (path) => navigate(path);

    return (
        <div style={{ height: '100vh' }}>
            <div className="d-grid gap-5 col-5 mx-auto" style={{ margin: '445px' }}>
                <Button variant="success" size="lg" onClick={() => handleClick('/history')} >
                    История
                </Button>
                <Button variant="warning" size="lg" onClick={() => handleClick('/socialScience')}>
                    Обществознание
                </Button>
            </div>
        </div>
        // <div className="d-grid gap-2 col-6 mx-auto">
        //     <button className="btn btn-primary" type="button" onClick={() => handleClick('/history')}>Button</button>
        //     <button className="btn btn-primary" type="button" onClick={() => handleClick('/socialScience')}>Button</button>
        // </div>
        // <div className="generalScreen">
        //     <button className='button is-dark is-large' onClick={() => handleClick('/history')}>История</button>
        //     <button className='button is-dark is-large' onClick={() => handleClick('/socialScience')}>Обществознание</button>
        // </div>
    );
}

export default Homepage;