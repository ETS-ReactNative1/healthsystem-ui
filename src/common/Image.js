import React from 'react';

const Image = (props) => {

    const path = `img/${props.name}.jpg`;
    const {text} = props;

    return (
        <div>
            <img src={path} width={"100%"} style={styles.image} alt="Image" />
            <p align="center" style={styles.text}>{text}</p>
        </div>
    );
};

const styles = {
    image: {
        float: "left"
    },
    text: {
        fontFamily: "MaruBuri-Regular",
        fontSize: "2.8vw"
    }
}

export default Image;