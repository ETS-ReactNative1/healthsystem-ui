import React, {useState} from 'react';

const BigButton = (props) => {
    const {title} = props;

    const [opacity, setOpacity] = useState(.4)
    const styles = {
        title: {
            fontFamily: "Cafe24SsurroundAir",
            fontWeight: "bold",
            color: "#000",
            opacity: opacity,
            fontSize: 30,
            lineHeight: 4,
            transition: "all .5s cubic-bezier(0.800, 0.000, 0.250, 1.000)"
        },
    }

    const overEvent = () => {
        setOpacity(1);
    }
    const leaveEvent = () => {
        setOpacity(.4);
    }

    return (
        <span style={styles.title} onMouseLeave={leaveEvent} onMouseOver={overEvent}>
            {title}
        </span>
    );
};

export default BigButton;