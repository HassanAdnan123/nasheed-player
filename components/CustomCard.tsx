"use client";
import Image from "next/image";
import { FC } from "react";

type CustomCardProps = {
  coverUrl: string;
  cardContent: any;
  title: string;
  darkMode: boolean;
  className?: string;
  coverClassName?: string;
};

const CustomCard: FC<CustomCardProps> = ({
  coverUrl,
  cardContent,
  title,
  darkMode,
  className,
  coverClassName,
}) => {
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg ${
        darkMode
          ? "bg-[#1b2737bd] [box-shadow:0px_7px_7px_#0000006b]"
          : "bg-[#fff9e5b5] [box-shadow:0px_4px_8px_#00000033]"
      } ${className}`}
    >
      <div>
        <Image
          src={coverUrl}
          alt="Unable to load image"
          width={400}
          height={200}
          className={`object-cover ${coverClassName}`}
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
