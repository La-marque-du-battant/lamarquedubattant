"use client";

import EventCard from "@/components/store/pages/EventCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { eventsData } from "@/lib/data";

export default function EventStoreLists() {
  const [events, setEvent] = useState(eventsData);

  return (
    <div className="px-6 py-10">
      <small className="text-gray-400">Participez</small>
      <h1 className="font-bold text-xl py-[20px]">A nos évènements</h1>
      {events && events.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((item, index) => {
            if (item.image != null) {
              return <EventCard key={index} event={item} />;
            }
          })}
        </div>
      ) : (
        <div>
          <h1>Pas d&apos;évenements pour le moment</h1>
        </div>
      )}
      <div className="w-60 my-16">
        <Button className="bg-black text-nowrap rounded-full px-1 py-2 text-white w-full">
          Nos évènements
        </Button>
      </div>
    </div>
  );
}
