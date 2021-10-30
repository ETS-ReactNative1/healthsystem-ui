import React, {useState} from 'react';

const NavButton = (props) => {
    const {title} = props;

    // const [borderBottom, setBorderBottom] = useState("4px solid #000");
    const [fontSize, setFontSize] = useState("1.8vw");
    const [lineOpacity, setLineOpacity] = useState(0);

    const styles = {
        title: {
            fontFamily: "MaruBuri-Regular",
            fontSize: fontSize,
            lineHeight: "3.5vw",
            paddingTop: "1.5vw",
            color: "#000",
        },
        line: {
            borderTop: "4px solid #000",
            display: "inline-block",
            width: "6vw",
            opacity: lineOpacity,
        }
    }

    const overEvent = () => {
        setFontSize("2vw");
        setLineOpacity(1);
    }
    const leaveEvent = () => {
        setFontSize("1.8vw");
        setLineOpacity(0);
    }

    return (
        <div style={styles.main}>
            <div style={styles.title} onMouseLeave={leaveEvent} onMouseOver={overEvent}>
                {title}
            </div>
            <div style={styles.line}>

            </div>
        </div>
    );
};

export default NavButton;