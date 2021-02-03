import React from 'react';
import {Link} from "react-router-dom";

const AboutPage = () => {
    return (
        <div>
            <h1>About page</h1>
            <Link to={'/'}>Go to Home</Link>
        </div>
    );
};

export default AboutPage;
