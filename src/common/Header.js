import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Col, Row} from "antd";
import BigButton from "./BigButton";

const Header = () => {
    // const {isAuthenticated, currentUser, onLogout} = props;
    const [opacity, setOpacity] = useState(.4);

    const styles = {
        panel: {
            top: 0,
            opacity: .4,
            backgroundColor: "#ecf0f1",
            position: "sticky",
            zIndex: 10,
        },
        logo: {
            opacity: opacity,
            width: "15vw",
            transition: "all .5s cubic-bezier(0.800, 0.000, 0.250, 1.000)"
        }
    };

    return (
        <div style={styles.panel}>
            <Row gutter={16}>
                <Col span={6}>
                    <Link to="/" onMouseOver={() => setOpacity(1)}
                                 onMouseLeave={() => setOpacity(.4)}>
                        <img src="img/logo.png" style={styles.logo} alt="logo"/>
                    </Link>
                </Col>
                <Col span={4}>
                    <Link to={"/menu1"}>
                        <BigButton title={"About"} />
                    </Link>
                </Col>
                <Col span={4}>
                    <Link to={"/course"}>
                        <BigButton title={"Course"} />
                    </Link></Col>
                <Col span={4}>
                    <Link to={"/menu3"}>
                        <BigButton title={"User"} />
                    </Link></Col>
                <Col span={4}>
                    <Link to={"/menu4"}>
                        <BigButton title={"My Page"} />
                    </Link></Col>
            </Row>
        </div>
    );
};


export default Header;