import React from 'react';

const ServicePanel = () => {
    return (

        <div style={styles.main}>
            <img src="img/runningImage.png" alt="달리는 이미지" style={styles.image}/>
            <div style={styles.box}>
                <div>
                    <img src="img/service1.png" alt="서비스 이미지1" style={styles.smallImage}/>
                </div>
                <h4 style={styles.title}>근력강화</h4>
                <p style={styles.text}>
                    몸을 지탱하는 코어머슬 유산소, 무산소운동이 인체를 건설한다면 코어운동은 몸의 기초공사
                    골격근의 출력 및 지구력 향상과 근육량 증가를 목적으로 하는 맞춤형 강의!
                </p>
            </div>
            <div style={styles.box}>
                <div>
                    <img src="img/service2.png" alt="서비스 이미지2" style={styles.smallImage}/>
                </div>
                <h4 style={styles.title}>체형조절</h4>
                <p style={styles.text}>
                    헬스도 꼭 선수처럼 하지 않아도 됩니다.
                    체력이 약하거나, 운동신경이 부족해도 괜찮습니다.
                    평범한 사람의 눈높이에 맞춘 보통 헬스를 소개합니다!
                </p>
            </div>
            <div style={styles.box}>
                <div>
                    <img src="img/service3.png" alt="서비스 이미지3" style={styles.smallImage}/>
                </div>
                <h4 style={styles.title}>다이어트</h4>
                <p style={styles.text}>
                    사람마다 라이프스타일이 다르고 체형이 달라요. 자신의 장점은 부각시키고 단점은 보완하는 나 자신을 업그레이드 시키는 과정을
                    클래스에서 알려드릴게요!
                </p>
            </div>
            <div style={styles.box}>
                <div>
                    <img src="img/service4.png" alt="서비스 이미지4" style={styles.smallImage}/>
                </div>
                <h4 style={styles.title}>요가</h4>
                <p style={styles.text}>
                    우리의 몸은 일상중 나의 의식 무의식이 만들어내는 생활 습관, 생활 패턴, 나의 생각을반영해 그것을 토대로 지금이순간도 몸과 마음의
                    균형을 만들어내고 있습니다.
                </p>
            </div>
        </div>
    );
};

const styles = {
    main: {
        position: "inline-block",
        width: "100%",
        height: "70vh",
        paddingLeft: "5vw",
        paddingRight: "5vw",
        paddingTop: "5vh",
        paddingBottom: "5vh",
    },
    image: {
        width: "50vw",
        height: "60vh",
        float: "left"
    },
    smallImage: {
        width: "4vw",
        height: "4vw",
        lineHeight: "5vw"
    },
    box: {
        width: "18vw",
        height: "30vh",
        float: "left",
        paddingLeft: "1vw",
        marginTop: "1vh"
    },
    title: {
        fontSize: "2vh",
        lineHeight: "6vh",
        fontFamily: 'MaruBuri-Regular',
        fontWeight: 600,
    },
    text: {
        fontFamily: 'MaruBuri-Regular',
        fontWeight: 600,
    }
}

export default ServicePanel;