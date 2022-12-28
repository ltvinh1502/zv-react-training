import React, { memo } from "react";

const Category = ({ category, handleDeleteItem }) => {
  return (
    <div
      onClick={() => handleDeleteItem(category.id)}
      className="flex flex-col py-4 items-center hover:opacity-40 cursor-pointer hover:border-b-2"
    >
      <img
        alt={category.imageUrl}
        src={category.imageUrl}
        width={24}
        height={24}
      />
      <span className="text-sm whitespace-nowrap">{category.title}</span>
    </div>
  );
};
const customComparator = (prevProps, nextProps) => {
  return nextProps.category === prevProps.category;
};

export default memo(Category, customComparator);
