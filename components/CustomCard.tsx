"use client";

import { FC } from "react";

type CustomCardProps = {
  imageUrl: string;
  cardContent: any;
  title: string;
};

const CustomCard: FC<CustomCardProps> = ({ imageUrl, cardContent, title }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div>
        <img src={imageUrl} alt="Image not found" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {cardContent}
      </div>
    </div>
  );
};

export default CustomCard;
