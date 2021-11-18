import React, {useState} from 'react';
import {Link} from "react-router-dom";

const NavButton = (props) => {
    const {to, title} = props;

    const [border, setBorder] = useState("4px solid rgba(116,185,255,0)");

    const styles = {
        main: {
            float: "left",
            position: "inline-block",
            width: "7vw",
            height: "8vh",
        },
        text: {
            fontFamily: 'Pretendard-Regular',
            color: "#fff",
            fontSize: "1.2vw",
            lineHeight: "8vh",
            transition: "all 0.3s ease-in",
            borderBottom: border,
        },
    }

    const mouseOverFunc = () => {
        setBorder("4px solid rgba(116,185,255,1)");
    }

    const mouseLeaveFunc = () => {
        setBorder("4px solid rgba(116,185,255,0)");
    }

    return (
        <Link to={to} onMouseOver={mouseOverFunc} onMouseLeave={mouseLeaveFunc}>
            <div style={styles.main}>
                <span style={styles.text}>
                    {title}
                </span>
            </div>
        </Link>
    );
};

export default NavButton;