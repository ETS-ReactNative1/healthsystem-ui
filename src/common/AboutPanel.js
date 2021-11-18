import React from 'react';
import BigButton from "./BigButton";

const AboutPanel = () => {
    return (
        <div style={styles.main}>
            <div style={styles.panel}>
                <img src="img/aboutImage.png" alt="소개 이미지" style={styles.image}/>

                <div style={styles.text}>
                    <h2 style={styles.title}>Story About Us</h2>
                    <p>1. 운동의 본질을 이해하고, 전문 선수들의 지속적인 연구와 끊임없는
                        샘플링을 통해 본인에 맞는 최적의 강의를 추천합니다.
                    </p>
                    <p>
                        2. 좋은 품질의 피트니스 강의를 부담 없는 가격에 이용할 수 있
                        습니다. 운동과 함께 걸어온 삶과 기록들을 응원합니다.
                    </p>
                    <p>
                        3. AI를 통한 강의를 통해 비대면임에도 정확한 자세교정을 하며,
                        효율을 볼 수 있습니다.
                    </p>
                    <BigButton to={"/about"} title={"Read More"}/>
                </div>
            </div>
        </div>
    );
};

const styles = {
    main: {
        fontFamily: 'GowunDodum-Regular',
        paddingLeft: "15vw",
        paddingRight: "15vw",
        paddingBottom: "5vh",
        paddingTop: "5vh"
    },
    panel: {
        width: "70vw",
        height: "50vh"
    },
    image: {
        float: "left",
        width: "35vw",
        height: "50vh"
    },
    text: {
        fontWeight: 600,
        position: "inline-block",
        width: "35vw",
        height: "50vh",
        float: "left",
        paddingLeft: "5vw",
        fontSize: "2vh",
        lineHeight: "3vh"
    },
    title: {
        fontSize: "5vh",
        fontWeight: 600,
        lineHeight: "10vh",
    }
}

export default AboutPanel;