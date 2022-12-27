import { Col, Row } from "antd";
import React from "react";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Categories from "../../components/Categories";
const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const Home = () => {
    return (
        <div className="max-w-screen-2xl w-full m-auto">
            <Categories />
            <Row gutter={20}>
                {data.map((item, index) => (
                    <Col key={index} span={4}>
                        <Card />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Home;
