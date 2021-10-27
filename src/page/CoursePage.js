import React from 'react';
import Course from "../common/Course";
import {Col, Pagination, Row} from "antd";

const CoursePage = () => {
    // const [courseList, setCourseList] = useState({});
    //
    // useEffect(() => {
    //     fetch("http://localhost:8080/course/list")
    //         .then(resp => resp.json())
    //         .then(data => setCourseList(data))
    //         .catch(err => console.log(err));
    // }, []);

    return (
        <div style={styles.main}>
            <br/>
            <Row gutter={16}>
                <Col span={12}>
                    <Course name="06" title="헬린이 근지구력 성장 코스" />
                </Col>
                <Col span={12}>
                    <Course name="07" title="파워 리프팅 상급자 코스"/>
                </Col>
            </Row><br/>
            <Row gutter={16}>
                <Col span={12}>
                    <Course name="08" title="쉽게 살 빼는 다이어트 요가"/>
                </Col>
                <Col span={12}>
                    <Course name="09" title="넓은 가슴을 갖는 방법"/>
                </Col>
            </Row><br/><br/><br/><br/>

            <Pagination defaultCurrent={1} total={50} />
        </div>
    );
};

const styles = {
    main: {
        textAlign: "center"
    }
}

export default CoursePage;