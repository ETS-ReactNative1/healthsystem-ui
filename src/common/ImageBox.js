import React from 'react';
import Parser from 'html-react-parser';

const ImageBox = (props) => {
    const path = `img/${props.name}.jpg`;
    const {title, text, float} = props;

    const styles = {
        image: {
            float: float
        },
        main: {
            fontFamily: "MaruBuri-Regular",
            marginTop: 200,
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

    return (
        <div style={styles.main}>
            <img src={path} width={"45%"} style={styles.image} alt="Image" />
            <h1 style={styles.title}>{title}</h1><hr/>
            <p style={styles.text}>{Parser(text)}</p>
        </div>
    );
};


export default ImageBox;