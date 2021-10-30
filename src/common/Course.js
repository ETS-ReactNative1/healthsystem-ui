import React, {useState} from 'react';
import {Rate} from "antd";
import LikeButton from "./LikeButton";

const Course = (props) => {
    const {title} = props;
    const path = `img/${props.name}.jpg`;

    const [imgWidth, setImgWidth] = useState("100%");
    const [imgMaxHeight, setImgMaxHeight] = useState("28vh");

    const styles = {
        main: {
            fontSize: "2vh",
            display: "inline-block",
            width: "26vw",
            paddingLeft: "1vw",
            paddingRight: "1vw",
            paddingTop: "5vh",
            paddingBottom: "5vh",
            float: "left",
            fontFamily: "Pretendard-Regular"
        },
        image: {
            width: imgWidth,
            height: "auto",
            maxHeight: imgMaxHeight,
            borderRadius: 5,
            transition: "all .5s cubic-bezier(0.800, 0.000, 0.250, 1.000)",
        },
        imageBlock: {
            position: "relative",
            minHeight: "30vh",
            paddingBottom: "4vh"
        },
        title: {
            textAlign: "center",
        },
        infoLine: {
            display: "inline-block",
            width: "100%",
            borderTop: "1px solid #000"
        },
        coach: {
            fontWeight: 900,
            float: "left",
            display: "inline-block"
        },
        rate: {
            float: "right",
        }
    }

    const mouseOverFunc = () => {
        // setImgWidth("110%");
        // setImgMaxHeight("30vh");
    }

    const mouseLeaveFunc = () => {
        // setImgWidth("100%");
        // setImgMaxHeight("28vh");
    }

    return (
        <div style={styles.main}>
            <div style={styles.imageBlock}>
                <LikeButton />
                <img src={path} style={styles.image} alt="course image"
                    onMouseOver={mouseOverFunc} onMouseLeave={mouseLeaveFunc}/>
            </div>
            <div>
                <div style={styles.infoLine}>
                    <span style={styles.coach}>박현근</span>
                    <Rate style={styles.rate} defaultValue={2.8} allowHalf disabled />
                </div>
                <div style={styles.title}>
                    {title}
                </div>
            </div>
        </div>
    );
};


export default Course;