import React, {useEffect, useState} from 'react';
import {CaretUpOutlined} from "@ant-design/icons";

const UpButton = (props) => {
    const {scrollY} = props;

    const [opacity, setOpacity] = useState(0);
    const [color, setColor] = useState("#2c3e50");

    const styles = {
        button: {
            margin: 0,
            bottom: "1vw",
            right: "1vw",
            height: "3vw",
            width: "3vw",
            backgroundColor: "#e0e0ff",
            color: color,
            position: "fixed",
            opacity: opacity,
            transition: "all .5s cubic-bezier(0.800, 0.000, 0.250, 1.000)",
            borderRadius: 3,
            cursor: "pointer",
            fontSize: "3vw",
            lineHeight: "3vw",
        }
    }

    useEffect(() => {
        if (scrollY <= 100) {
            setOpacity(0);
        }
        else {
            setOpacity(1);
        }
        console.log(scrollY)
    }, [scrollY]);

    const toTheTopFunc = () => {
        window.scroll({top: 0, behavior: 'smooth'});
    }

    const mouseOverFunc = () => {
        setColor("#fff");
    }

    const mouseLeaveFunc = () => {
        setColor("#2c3e50");
    }

    return (
        <div style={styles.button} onClick={toTheTopFunc} onMouseOver={mouseOverFunc} onMouseLeave={mouseLeaveFunc}>
            <CaretUpOutlined />
        </div>
    );
};

export default UpButton;