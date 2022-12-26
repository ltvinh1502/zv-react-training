import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import Carousel from "react-multi-carousel";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
const Card = () => {
    return (
        <div className="relative mt-5 cursor-pointer rounded-xl">
            <FaHeart className="absolute z-30 top-2 right-2" color="white" />
            <Carousel
                responsive={responsive}
                className="rounded-xl z-20"
                showDots
            >
                <img
                    alt=""
                    src="https://a0.muscache.com/im/pictures/65c2218f-6d11-4978-b63a-83d1e59f6677.jpg?im_w=720"
                    className="object-cover h-64 w-64"
                />
                <img
                    alt=""
                    src="https://a0.muscache.com/im/pictures/65c2218f-6d11-4978-b63a-83d1e59f6677.jpg?im_w=720"
                    className="object-cover h-64 w-64"
                />
                <img
                    alt=""
                    src="https://a0.muscache.com/im/pictures/65c2218f-6d11-4978-b63a-83d1e59f6677.jpg?im_w=720"
                    className="object-cover h-64 w-64"
                />
                <img
                    alt=""
                    src="https://a0.muscache.com/im/pictures/65c2218f-6d11-4978-b63a-83d1e59f6677.jpg?im_w=720"
                    className="object-cover rounded-xl h-64 w-64"
                />
            </Carousel>
            <div className="flex flex-col">
                <div className="flex justify-between items-center">
                    <span className="font-bold whitespace-nowrap">
                        Thành phố Nha Trang, Việt Nam
                    </span>
                    <span className="flex">
                        <AiFillStar /> 4,5
                    </span>
                </div>
                <span>Hướng biển</span>
                <span>Ngày 08 - Ngày 13 tháng 1</span>
                <span>
                    <span className="font-bold">$1.190</span> đêm
                </span>
            </div>
        </div>
    );
};

export default Card;
