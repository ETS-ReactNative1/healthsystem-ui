import React, {useState} from 'react';
import {Link} from "react-router-dom";

const BigButton = (props) => {
    const {to, title} = props;

    const [background, setBackGround] = useState("linear-gradient( to left, #686de0, #4834d4 )");

    const styles = {
        main: {
            width: "10vw",
            height: "5vh",
            lineHeight: "5vh",
            textAlign: "center",
            position: "inline-block",
            background: background,
            float: "left",
            margin: "2.5vh"
        },
        text: {
            fontFamily: 'Pretendard-Regular',
            color: "#fff",
            fontSize: 20,
        }
    }

    const mouseOverFunc = () => {
        setBackGround("linear-gradient( to left, #787df0, #5844e4 )");
    }

    const mouseLeaveFunc = () => {
        setBackGround("linear-gradient( to left, #686de0, #4834d4 )");
    }

    return (
        <Link to={to}>
            <div style={styles.main} onMouseOver={mouseOverFunc} onMouseLeave={mouseLeaveFunc}>
                <span style={styles.text}>{title}</span>
            </div>
        </Link>
    );
};


export default BigButton;