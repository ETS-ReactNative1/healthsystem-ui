import React from 'react';
import {Link} from "react-router-dom";
import SmallButton from "./SmallButton";

const Test = () => {

    return (
        <div style={styles.test}>
            <Link to={'/signin'}>
                <SmallButton name="Sign in" />
            </Link>
            <Link to={'/login'}>
                <SmallButton name="Log in" />
            </Link>
        </div>
    );
};

const styles = {
    test: {
        height: 40,
        backgroundColor: "#2c3e50",
    },
}

export default Test;