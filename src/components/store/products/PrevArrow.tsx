"use client";
import { LuChevronLeft } from "react-icons/lu";

export default function PrevArrow({ onClick }: { onClick?: Function }) {
  return (
    <div className="absolute mr-16 right-0 -top-[70px]" onClick={() => onClick}>
      <div className="border border-black h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
        <LuChevronLeft />
      </div>
    </div>
  );
}
