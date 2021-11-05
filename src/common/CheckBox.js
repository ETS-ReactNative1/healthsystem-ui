import React, {useState} from 'react';
import {CheckOutlined} from "@ant-design/icons";

const CheckBox = (props) => {
    const {isChecked, checkFunc, children} = props;

    const [borderColor, setBorderColor] = useState("#74b9ff");
    const [backColor, setBackColor] = useState("#dff9fb");
    const [checkSize, setCheckSize] = useState(0);
    const [checkColor, setCheckColor] = useState("#74b9ff");

    const styles = {
        box: {
            width: "20px",
            height: "20px",
            backgroundColor: backColor,
            border: `1px solid ${borderColor}`,
            borderRadius: 2,
            textAlign: "center",
            display: "inline-block",
        },
        check: {
            fontSize: checkSize,
            color: checkColor,
            lineHeight: "20px",
            transition: "all .3s cubic-bezier(0.480, -0.600, 0.535, 1.650)",
        }
    }

    const mouseOverFunc = () => {
        setBorderColor("#94d9ff")

        if(isChecked) {
            setBackColor("#a4e9ff");
        }
        else {
            setBackColor("#f5ffff");
        }
    }

    const mouseLeaveFunc = () => {
        setBorderColor("#74b9ff")

        if(isChecked) {
            setBackColor("#84c9ff");
        }
        else {
            setBackColor("#dff9fb");
        }
    }

    const clickFunc = () => {
        if(isChecked) {
            checkFunc(false);
            setCheckSize(0);
            setCheckColor("#74b9ff");
        }
        else {
            checkFunc(true);
            setCheckSize(15);
            setCheckColor("#fff");
        }
    }

    return (
        <div>
            <span>{children} </span>
            <span style={styles.box} onClick={clickFunc}
                 onMouseOver={mouseOverFunc}
                 onMouseLeave={mouseLeaveFunc}>
                <CheckOutlined style={styles.check} />
            </span>
        </div>
    );
};

export default CheckBox;