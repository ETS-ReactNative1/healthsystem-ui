import React, {useState} from 'react';

const LikeButton = () => {

    const [heart, setHeart] = useState("♡")
    const [heartSize, setHeartSize] = useState("1.8vw");
    const [isClicked, changeClickState] = useState(false);

    const styles = {
        main: {
            display: "inline-block",
            position: "absolute",
            right: "1vw",
            top: "1vh",
            width: "2vw",
            height: "2vw",
            backgroundColor: "white",
            borderRadius: 50,
            opacity: .4,
            cursor: "pointer",
        },
        button: {
            position: "relative",
            fontSize: heartSize,
            lineHeight: "2.2vw",
            color: "#ff3838",
            transition: "all .1s cubic-bezier(0.670, -0.600, 0.550, 0.995)"
        }
    }

    const mouseOverFunc = () => {
        if(!isClicked) {
            setHeart("♥");
        }

        setHeartSize("2.1vw");
    }

    const mouseLeaveFunc = () => {
        if(!isClicked) {
            setHeart("♡");
        }

        setHeartSize("1.8vw");
    }

    const heartClickFunc = () => {
        if(isClicked) {
            changeClickState(false);
        }
        else {
            changeClickState(true);
        }

        setHeartSize("0vw");
    }

    return (
        <div style={styles.main} onMouseOver={mouseOverFunc} onMouseLeave={mouseLeaveFunc}
                                onClick={heartClickFunc}>
            <span style={styles.button}>
                {heart}
            </span>
        </div>
    );
};

export default LikeButton;