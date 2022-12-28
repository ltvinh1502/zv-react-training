import { Image } from "antd";
import React, { memo } from "react";

const Category = ({ id, title, imageUrl, handleDeleteItem }) => {
  return (
    <div
      onClick={() => handleDeleteItem(id)}
      className="flex flex-col py-4 items-center hover:opacity-40 cursor-pointer hover:border-b-2"
    >
      <img alt={imageUrl} src={imageUrl} width={24} height={24} />
      <span className="text-sm whitespace-nowrap">{title}</span>
    </div>
  );
};

export default memo(Category);
