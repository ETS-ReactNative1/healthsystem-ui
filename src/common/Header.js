import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Col, Row} from "antd";
import NavButton from "./NavButton";

const Header = () => {
    // const {isAuthenticated, currentUser, onLogout} = props;

    const [logoOpacity, setLogoOpacity] = useState(.6);

    const styles = {
        panel: {
            width: "100%",
            height: "7vw",
            top: 0,
            backgroundColor: "#ecf0f1",
            zIndex: 10,
            textAlign: "center",
        },
        logo: {
            width: "15vw",
            opacity: logoOpacity,
        }
    };

    return (
        <div style={styles.panel}>
            <Row gutter={16}>
                <Col span={6}>
                    <Link to="/">
                        <img src="img/logo.png" style={styles.logo} alt="logo"
                            onMouseOver={() => setLogoOpacity(1)} onMouseLeave={() => setLogoOpacity(.6)}/>
                    </Link>
                </Col>
                <Col span={4}>
                    <Link to={"/menu1"}>
                        <NavButton title={"About"} />
                    </Link>
                </Col>
                <Col span={4}>
                    <Link to={"/course"}>
                        <NavButton title={"Course"} />
                    </Link></Col>
                <Col span={4}>
                    <Link to={"/menu3"}>
                        <NavButton title={"User"} />
                    </Link></Col>
                <Col span={4}>
                    <Link to={"/menu4"}>
                        <NavButton title={"My Page"} />
                    </Link></Col>
            </Row>
        </div>
    );
};


export default Header;