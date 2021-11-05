import React, {useState} from 'react';
import {Button, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import CheckBox from "../common/CheckBox";

const LoginPage = () => {

    const [rememberMe, setRememberMe] = useState(false);

    const styles = {
        main: {
            width: "30vw",
            height: "30vh",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20vh",
            marginBottom: "20vh",
            textAlign: "center",
        },
        line: {
            marginTop: "3vh"
        }
    }

    // const loginFunc = () => {
    //
    // }

    return (
        <div style={styles.main}>
            <form>
                <Input size="large" placeholder="ID" prefix={<UserOutlined/>} style={styles.line}/>
                <Input.Password size="large" placeholder="Password" prefix={<LockOutlined/>} style={styles.line}/>
                <div style={styles.line}>
                    <CheckBox isChecked={rememberMe} checkFunc={setRememberMe}>Remember Me</CheckBox>
                </div>
                <Button type="primary" style={styles.line}>Log in</Button>
            </form>
        </div>
    );
};

export default LoginPage;