import { Col, Row } from "antd";
import React, { useState } from "react";
import Card from "../../components/Card";
import Categories from "../../components/Categories";
import { cardList } from "../../data/card.content";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="max-w-screen-2xl w-full m-auto">
      <Categories />
      <Row>
        <div>{count}</div>
        <button onClick={() => setCount((prev) => prev + 1)}>btn</button>
      </Row>
      <Row gutter={20}>
        {cardList.map((item, index) => (
          <Col key={index} span={4}>
            <Card card={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
