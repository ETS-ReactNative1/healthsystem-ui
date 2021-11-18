import React from 'react';
import MainPanel from "../common/MainPanel";
import ReviewPanel from "../common/ReviewPanel";
import AboutPanel from "../common/AboutPanel";
import ServicePanel from "../common/ServicePanel";

const MainPage = () => {
    return (
        <div>
            <MainPanel/>
            <AboutPanel />
            <ReviewPanel />
            <ServicePanel />
        </div>
    );
};

export default MainPage;