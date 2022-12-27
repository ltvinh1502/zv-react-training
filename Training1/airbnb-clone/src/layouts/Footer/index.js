import React from "react";
import { RiGlobalLine } from "react-icons/ri";
import { SlArrowUp } from "react-icons/sl";
import { BsMapFill } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="border-t fixed bottom-0 w-full bg-white z-50 ">
            <div className="max-w-screen-2xl m-auto w-full py-4 relative">
                <span className="absolute w-36 cursor-pointer hover:shadow-xl flex items-center justify-center py-4 text-white whitespace-nowrap gap-2 -top-20 left-0 right-0 ml-auto mr-auto bg-black rounded-full">
                    Hiện bản đồ <BsMapFill />
                </span>
                <div className="flex justify-between items-center">
                    <div className="flex justify-between gap-10 items-center">
                        <span>© 2022 Airbnb, Inc.</span>
                        <ol className="flex gap-10 list-disc items-center m-0 justify-between">
                            <li>Quyền riêng tư</li>
                            <li>Điều khoản</li>
                            <li>Sơ đồ trang web</li>
                        </ol>
                    </div>
                    <div className="flex gap-10 items-center justify-center">
                        <span className="flex gap-2 items-center justify-center font-medium text-xs">
                            <RiGlobalLine size={20} /> Tiếng Việt (VN)
                        </span>
                        <span className="font-medium text-xs">$ USD</span>
                        <span className="flex items-center justify-center gap-2 font-medium text-xs">
                            Hỗ trợ và tài nguyên <SlArrowUp size={15} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
