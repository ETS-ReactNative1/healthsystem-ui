import React from 'react';
import BigButton from "./BigButton";

const MainPanel = () => {
    return (
        <div style={styles.main}>
            <img src="img/mainImage.png" style={styles.image} alt="메인 이미지"/>
            <div style={styles.text}>
                <h1 style={styles.title}>
                    WEB FITNESS
                </h1>
                <h1 style={styles.bigTitle}>
                    AI PLATFORM FITNESS
                </h1>
                <div style={styles.description}>
                    비대면 AI 헬스플랫폼<br/>
                    온라인 헬스 강의 및 강사추천
                </div>
                <BigButton to="/about" title="Read more"/>
            </div>
        </div>
    );
};

const styles = {
    main: {
        position: "relative",
        left: 0,
        top: 0,
        backgroundColor: "black",
        paddingLeft: "5vw",
        paddingRight: "5vw",
        width: "100%",
    },
    image: {
        width: "100%",
        zIndex: 0
    },
    text: {
        position: "absolute",
        left: "20vw",
        top: "40vh",
        color: "#fff",
        width: "40vw",
        backgroundColor: "rgba(0, 0, 0, .3)",
        zIndex: 1
    },
    title: {
        fontSize: "2vh",
        letterSpacing: "1vh",
        color: "#74b9ff"
    },
    bigTitle: {
        fontSize: "10vh",
        lineHeight: "10vh",
        color: "#fff"
    },
    description: {
        fontFamily: 'MaruBuri-Regular',
        fontSize: "2vh",
    }
}

export default MainPanel;