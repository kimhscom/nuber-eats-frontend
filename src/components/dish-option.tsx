import React from "react";

interface IDishOptionProps {
  dishId: number;
  name: string;
  extra?: number | null;
  isSelected: boolean;
  addOptionToItem: (dishId: number, optionName: string) => void;
  removeOptionFromItem: (dishId: number, optionName: string) => void;
}

export const DishOption: React.FC<IDishOptionProps> = ({
  dishId,
  name,
  extra,
  isSelected,
  addOptionToItem,
  removeOptionFromItem,
}) => {
  const onClick = () => {
    if (isSelected) {
      removeOptionFromItem(dishId, name);
    } else {
      addOptionToItem(dishId, name);
    }
  };

  return (
    <span
      className={`flex border items-center ${
        isSelected ? "border-gray-800" : ""
      }`}
      onClick={onClick}
    >
      <h6 className="mr-2">{name}</h6>
      {extra && <h6 className="text-sm opacity-75">(${extra})</h6>}
    </span>
  );
};
