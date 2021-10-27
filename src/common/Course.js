import React from 'react';

const Course = (props) => {
    const {title} = props;
    const path = `img/${props.name}.jpg`;
    const styles = {
        main: {
            height: "30vw"
        },
        title: {
            fontSize: "2vw",
            width: "100%",
            display: "inline-block",
            verticalAlign: "bottom",
            fontFamily: "Pretendard-Regular"
        }
    }

    return (
        <div style={styles.main}>
            <img src={path} width="100%" height="450vw" alt="course image" />
            <h1 style={styles.title}>
                {title}
            </h1>
        </div>
    );
};


export default Course;