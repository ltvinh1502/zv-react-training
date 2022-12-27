import React, { useEffect, useState } from "react";
import { IoSearchCircleSharp } from "react-icons/io5";
import { RiGlobalLine } from "react-icons/ri";
import { BsList } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const onScroll = (e) => {
            setScrollTop(e.target.documentElement.scrollTop);
            setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);
    return (
        <div className="flex flex-col z-50">
            <div className="h-16 bg-gray-100 flex items-center justify-center">
                <span className="font-medium">
                    Xem trước tổng giá{" "}
                    <span className="underline">Tìm hiểu thêm</span>
                </span>
            </div>

            <div
                className={`${
                    scrollTop > 64 && "fixed"
                } bg-white z-50 flex justify-center w-full py-4 border-t border-b items-center`}
            >
                <div className="max-w-screen-2xl w-full flex items-center justify-between">
                    <div className="flex-1">
                        <img src="logo.png" height={80} width={100} alt="" />
                    </div>
                    <div className="flex cursor-pointer border-[#dddddd] hover:shadow-[0_1px_2px_rgb(0,0,0,8%),0_4px_12px_rgb(0,0,0,5%)] border gap-3 pl-4 rounded-full items-center">
                        <span className="text-xs font-medium">
                            Địa điểm bất kỳ
                        </span>
                        <span className="text-xs px-2 font-medium border-l-2 border-r-2">
                            Tuần bất kỳ
                        </span>
                        <div className="text-xs  flex items-center">
                            Thêm khách
                            <span>
                                <IoSearchCircleSharp
                                    size={40}
                                    color="#ff385c"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-4 flex-1">
                        <span className="text-xs font-medium">
                            Cho thuê chỗ ở qua Airbnb
                        </span>
                        <span>
                            <RiGlobalLine size={20} />
                        </span>
                        <div className="flex items-center gap-4 justify-between p-2 rounded-full border">
                            <BsList size={20} />
                            <FaUserCircle size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
