import React, {useEffect, useState} from 'react';

const Image = (props) => {
    const path = `img/${props.name}.jpg`;
    const {text, scrollY, hideY} = props;

    const [opacity, setOpacity] = useState(0);
    const [paddingTop, setPaddingTop] = useState("5vw");

    const styles = {
        main: {
            opacity: opacity,
            paddingTop: paddingTop,
            transition: "all .3s cubic-bezier(0.800, 0.000, 0.250, 1.000)",
        },
        image: {
            float: "left"
        },
        text: {
            fontFamily: "MaruBuri-Regular",
            fontSize: "2.8vw"
        }
    }

    useEffect(() => {
        if(scrollY >= hideY) {
            setOpacity(1);
            setPaddingTop(0);
        }
        else {
            setOpacity(0);
            setPaddingTop("5vw");
        }
    }, [scrollY])

    return (
        <div style={styles.main}>
            <img src={path} width={"100%"} style={styles.image} alt="Image" />
            <p align="center" style={styles.text}>{text}</p>
        </div>
    );
};

export default Image;