import React, {useState} from 'react';

const SmallButton = (props) => {
    const {name} = props;

    const [color, setColor] = useState('#fff')
    const styles = {
        button: {
            fontFamily: "ELAND_Choice_M",
            width: 80,
            height: 40,
            color: color,
            float: "right",
            fontSize: 20,
            transition: "all .5s cubic-bezier(0.800, 0.000, 0.250, 1.000)"
        },
    }

    const overEvent = () => {
        setColor('#3498db')
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

export default SmallButton;