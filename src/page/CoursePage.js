import React, {useEffect, useState} from 'react';
import Course from "../common/Course";
import ImagePanel from "../common/ImagePanel";
import RemoteConPanel from "../common/RemoteConPanel";

const CoursePage = () => {
    // const axios = require('axios');
    //
    // const [courseList, setCourseList] = useState([]);

    const styles = {
        main: {
            textAlign: "center",
        },
        courseList: {
            display: "inline-block"
        }
    }

    // const getCourseList = async () => {
    //     try {
    //         return await axios.get('http://localhost:8080/course/list');
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // useEffect(() => {
    //      setCourseList(getCourseList());
    //     console.log(courseList);
    // }, []);

    return (
        <div className={"container"} style={styles.main}>
            <ImagePanel/>
            <RemoteConPanel/>
            <div style={styles.courseList}>
                <Course name="06" title="헬린이 근지구력 성장 코스"/>
                <Course name="07" title="파워 리프팅 상급자 코스"/>
                <Course name="08" title="쉽게 살 빼는 다이어트 요가"/>
                <Course name="09" title="넓은 가슴을 갖는 방법"/>
            </div>
            {/*<Pagination defaultCurrent={1} total={50}/>*/}
        </div>
    );
};

export default CoursePage;