import React from 'react';
import Image from "../common/Image";
import {Col, Row} from "antd";
import ImageBox from "../common/ImageBox";

const MainPage = () => {
    return (
        <div style={styles.main}>
            <div style={styles.text}>{"운동 왜 안하세요??"}</div>
            <div>
                <Row gutter={16}>
                    <Col span={8}>
                        <Image width="100%" name="01" text="바깥은 너무 추워요"/>
                    </Col>
                    <Col span={8}>
                        <Image width="100%" name="02" text="코로나가 무서워요"/>
                    </Col>
                    <Col span={8}>
                        <Image width="100%" name="03" text="운동은 힘들잖아요"/>
                    </Col>
                </Row>
            </div>
            <div>
                <Row gutter={16}>
                    <ImageBox name="04" title="집에서 안전하고 편하게" text="<br/><br/>편안한 집에서 타인과의 접촉 없이<br/> 원하는 시간대에 운동을 해요." float="left" />
                </Row>
            </div>
            <div>
                <Row gutter={16}>
                    <ImageBox name="05" title="경력자에게 확실하게" text="<br/><br/>초보자라도 걱정없이<br/> 경력자에게 원하는 운동을 배워요." float="right" />
                </Row>
            </div>
        </div>
    );
};

const styles = {
    main: {
        marginTop: 0,
        paddingTop: 100,
    },
    text: {
        fontSize: "8vw",
        textAlign: "center",
        fontFamily: "GongGothicMedium",
        lineHeight: "15vw",
        marginTop: 150,
        marginBottom: 300,
    }
}

export default MainPage;