import React from 'react';
import {Link} from "react-router-dom";
import NavButton from "./NavButton";
import BigButton from "./BigButton";

const Header = () => {
    return (
        <div style={styles.main}>
            <div>
                <Link to="/">
                    <img src="img/logo.png" alt="메인 로고 이미지" style={styles.logo}/>
                </Link>
                <div style={styles.buttons}>
                    <NavButton to="/" title="Home" />
                    <NavButton to="/about" title="About" />
                    <NavButton to="/trainer" title="강사" />
                    <NavButton to="/course" title="코스" />
                    <NavButton to="/myCourse" title="내 강의" />
                    <BigButton to="/signIn" title="Sign In" />
                </div>
            </div>
        </div>
    );
};

const styles = {
    main: {
        position: "relative",
        paddingLeft: "10vw",
        paddingRight: "10vw",
        left: 0,
        top: 0,
        width: "100%",
        height: "10vh",
        backgroundColor: "black",
        zIndex: 1,
        borderBottom: "1px solid rgba(255,255,255,.3)",
    },
    logo: {
        width: "10vw",
        height: "10vh"
    },
    buttons: {
        float: "right",
        right: "10vw",
        position: "inline-block",
    }
}

export default Header;