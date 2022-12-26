import React from "react";
import Carousel from "../Carousel";
import Category from "../Category";
import { CiSliderHorizontal } from "react-icons/ci";
import { Col, Row } from "antd";
const data = [
    {
        id: 1,
        imageUrl:
            "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        title: "Khung cảnh tuyệt vời",
    },
    {
        id: 2,
        imageUrl:
            "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        title: "Được ưa chuộng",
    },
    {
        id: 3,
        imageUrl:
            "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        title: "Mới",
    },
    {
        id: 4,
        imageUrl:
            "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        title: "Nhiệt đới",
    },
    {
        id: 5,
        imageUrl:
            "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        title: "Container",
    },
    {
        id: 6,
        imageUrl:
            "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        title: "Phòng riêng",
    },
    {
        id: 7,
        imageUrl:
            "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        title: "Hồ bơi tuyệt vời",
    },
    {
        id: 8,
        imageUrl:
            "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        title: "Nhà nhỏ",
    },
    {
        id: 9,
        imageUrl:
            "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        title: "Phục vụ bữa sáng",
    },
    {
        id: 10,
        imageUrl:
            "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        title: "Nông thôn",
    },
    {
        id: 11,
        imageUrl:
            "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        title: "Chơi golf",
    },
    {
        id: 12,
        imageUrl:
            "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        title: "Nhà trên cây",
    },
    {
        id: 13,
        imageUrl:
            "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        title: "Hang động",
    },
    {
        id: 14,
        imageUrl:
            "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        title: "Công viên quốc gia",
    },
    {
        id: 15,
        imageUrl:
            "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        title: "Luxe",
    },
];
const Categories = () => {
    return (
        <div>
            <Row align="middle">
                <Col span={22}>
                    <Carousel>
                        {data.map((item, index) => (
                            <Category
                                key={index}
                                id={item.id}
                                imageUrl={item.imageUrl}
                                title={item.title}
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
        </div>
    );
};

export default Categories;
