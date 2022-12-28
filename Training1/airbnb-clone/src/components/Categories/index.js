import { Col, Row } from "antd";
import React, { useState } from "react";
import { CiSliderHorizontal } from "react-icons/ci";
import { categoryList } from "../../data/categories.content";
import Carousel from "../Carousel";
import Category from "../Category";

const Categories = () => {
  const [data, setData] = useState(categoryList);
  const handleDeleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <Row align="middle">
      <Col span={22}>
        <Carousel>
          {data.map((item, index) => (
            <Category
              key={index}
              id={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              handleDeleteItem={handleDeleteItem}
            />
          ))}
        </Carousel>
      </Col>
      <Col span={2}>
        <div className="flex items-center h-full justify-center">
          <div className="whitespace-nowrap border px-2 rounded-xl py-1 flex items-center justify-center">
            <CiSliderHorizontal size={20} />
            Bộ lọc
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Categories;
