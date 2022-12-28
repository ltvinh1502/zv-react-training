import { Col, Row } from "antd";
import React from "react";
import Card from "../../components/Card";
import Categories from "../../components/Categories";
import { cardList } from "../../data/card.content";

const Home = () => {
  return (
    <div className="max-w-screen-2xl w-full m-auto">
      <Categories />
      <Row gutter={20}>
        {cardList.map((item, index) => (
          <Col key={index} span={4}>
            <Card />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
