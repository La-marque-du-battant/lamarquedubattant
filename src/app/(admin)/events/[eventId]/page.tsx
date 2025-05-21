import { eventsData } from "@/lib/data";
import React from "react";

export function generateStaticParams() {
  return eventsData.map((item) => ({
    eventId: item.id,
  }));
}

export default function EventDetails() {
  return (
    <div className="px-10 py-5">
      <p className="text-heading2-bold">Evenements</p>
    </div>
  );
}
