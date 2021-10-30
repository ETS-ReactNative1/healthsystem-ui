import React from 'react';
import {Link} from "react-router-dom";
import TopButton from "./TopButton";

const TopLine = () => {

    return (
        <div style={styles.test}>
            <Link to={'/signin'}>
                <TopButton name="Sign in" />
            </Link>
            <Link to={'/login'}>
                <TopButton name="Log in" />
            </Link>
        </div>
    );
};

const styles = {
    test: {
        height: "2vw",
        backgroundColor: "#4b6584",
    },
}

export default TopLine;