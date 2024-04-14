"use client";
import Image from "next/image";
import { FC } from "react";

type CustomCardProps = {
  imageUrl: string;
  cardContent: any;
  title: string;
  darkMode: boolean;
};

const CustomCard: FC<CustomCardProps> = ({
  imageUrl,
  cardContent,
  title,
  darkMode,
}) => {
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg ${
        darkMode
          ? "bg-[#1b2737bd] [box-shadow:0px_7px_7px_#0000006b]"
          : "bg-[#fff9e5b5] [box-shadow:0px_4px_8px_#00000033]"
      }`}
      style={{ minHeight: "27rem" }}
    >
      <div>
        <Image
          src={imageUrl}
          alt="Unable to load image"
          width={400}
          height={200}
          style={{
            minHeight: "200px",
            minWidth: "400px",
          }}
          priority
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {cardContent}
      </div>
    </div>
  );
};

export default CustomCard;
