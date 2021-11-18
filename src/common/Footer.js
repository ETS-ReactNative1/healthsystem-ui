import React from 'react';


const Footer = () => {

    const styles = {
        main: {
            backgroundColor: "black",
            width: "100%",
            height: "30vh",
            color: "#fff",
            paddingLeft: "19vw",
            paddingRight: "19vw",
        },
        line: {
            width: "100%",
            height: "15vh",
        },
        firstElement: {
            float: "left",
            width: "20vw",
            height: "100%",
            marginTop: "2.5vh",
            paddingLeft: "5vw",
            lineHeight: "5vh"
        },
        title: {
            fontSize: "1vw",
            color: "#74b9ff",
            fontFamily: 'Pretendard-Regular',
        },
        content: {
            fontSize: "1.1vw",
            fontFamily: 'Pretendard-Regular',
        },
        sns: {
            float: "right",
        }
    }

    return (
        <div style={styles.main}>
            <div style={styles.line}>
                <div style={styles.firstElement}>
                    <span style={styles.title}>Phone</span>
                    <p style={styles.content}>
                        (123) 456 7890
                    </p>
                </div>
                <div style={styles.firstElement}>
                    <span style={styles.title}>Address</span>
                    <p style={styles.content}>
                        한국 품질 재단
                    </p>
                </div>
                <div style={styles.firstElement}>
                    <span style={styles.title}>Email</span>
                    <p style={styles.content}>
                        pps.com
                    </p>
                </div>
            </div>

            <div style={styles.line}>
                <div style={{textAlign: "center"}}>
                    Copyright &copy;2021 All rights reserved
                </div>
            </div>


        </div>
    );
};

export default Footer;