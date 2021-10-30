import React, {useEffect, useState} from 'react';
import Parser from 'html-react-parser';

const ImageBox = (props) => {
    const path = `img/${props.name}.jpg`;
    const {title, text, float, scrollY, hideY} = props;

    const [opacity, setOpacity] = useState(0);
    const [paddingTop, setPaddingTop] = useState("5vw");

    const styles = {
        image: {
            float: float
        },
        main: {
            fontFamily: "MaruBuri-Regular",
            marginTop: "20vw",
            opacity: opacity,
            paddingTop: paddingTop,
            transition: "all .3s cubic-bezier(0.800, 0.000, 0.250, 1.000)",
        },
        title: {
            fontSize: "2.8vw",
            textAlign: "center"
        },
        text: {
            fontSize: "1.4vw",
            textAlign: "center"
        },
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
            <img src={path} width={"45%"} style={styles.image} alt="Image" />
            <h1 style={styles.title}>{title}</h1><hr/>
            <p style={styles.text}>{Parser(text)}</p>
        </div>
    );
};


export default ImageBox;