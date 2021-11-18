import React from 'react';

const ReviewPanel = () => {
    return (
        <div style={styles.main}>
            <h2 style={styles.title}>수강 후기</h2>
            <img src="img/reviewImage.png" alt="회원 리뷰 이미지" style={styles.image}/>
        </div>
    );
};

const styles = {
    main: {
        fontFamily: 'GowunDodum-Regular',
        fontWeight: 900,
        paddingBottom: "5vh",
        paddingLeft: "15vw",
        paddingRight: "15vw",
        backgroundColor: "#ecf0f1"
    },
    title: {
        textAlign: "center",
        fontSize: "3vw",
    },
    image: {
        width: "70vw"
    }
}

export default ReviewPanel;