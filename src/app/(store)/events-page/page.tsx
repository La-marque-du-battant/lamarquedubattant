"use client";

import Image from "next/image";
import EventCard from "@/components/store/pages/EventCard";
import { eventsData } from "@/lib/data";

export default function EventsPage() {
  return (
    <div className="overflow-hidden">
      <div className="h-[400px] relative w-full">
        <Image
          src="eventdefault.jpg"
          width={800}
          height={800}
          alt="Event Image"
          className="w-full h-full object-cover"
        />
        <div className="h-full w-full bg-black opacity-40 absolute top-0 left-0 z-0"></div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-heading3-bold font-semibold text-center">
          Chaque année, nous organisons des évènements pour le rassemblement des
          battants{" "}
        </h1>
      </div>
      <div className="px-6 py-10 ">
        <h1 className="py-4 font-bold text-heading4-bold">Evenements</h1>
        {eventsData && eventsData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventsData.map((item, index) => {
              return <EventCard key={index} event={item} />;
            })}
          </div>
        ) : (
          <div>
            <h1>Pas d&apos;évenements pour le moment</h1>
          </div>
        )}
      </div>
    </div>
  );
}
