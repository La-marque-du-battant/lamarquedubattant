"use client";
import { LuChevronRight } from "react-icons/lu";

export default function NextArrow({ onClick }: { onClick?: Function }) {
  return (
    <div className="absolute right-0 -top-[70px]" onClick={() => onClick}>
      <div className="border border-black h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
        <LuChevronRight />
      </div>
    </div>
  );
}
