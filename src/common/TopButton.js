import React, {useState} from 'react';

const TopButton = (props) => {
    const {name} = props;

    const [color, setColor] = useState('#fff')
    const styles = {
        button: {
            fontFamily: "ELAND_Choice_M",
            width: "4vw",
            height: "2vw",
            color: color,
            float: "right",
            fontSize: "1vw",
            lineHeight: "2vw",
            transition: "all .5s cubic-bezier(0.800, 0.000, 0.250, 1.000)"
        },
    }

    const overEvent = () => {
        setColor('#48dbfb')
    }
    const leaveEvent = () => {
        setColor('#fff');
    }

    return (
        <span style={styles.button} onMouseOver={overEvent} onMouseLeave={leaveEvent}>
            {name}
        </span>
    );
};

export default TopButton;