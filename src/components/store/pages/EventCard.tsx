import Image from "next/image";
import Link from "next/link";

export default function EventCard({ event }: any) {
  return (
    <div>
      <div className="w-full h-[24rem] overflow-hidden">
        <Image
          src={event.image ? event.image : "defaultImage.png"}
          width={800}
          height={800}
          alt="Event Image"
          className="w-full h-full object-cover transition duration-700 ease-in-out transform hover:scale-105"
        />
      </div>
      <div className="flex pt-4 justify-between">
        <div className="leading-6 ">
          <small className="text-gray-400">{event.name}</small>
          <h1 className="font-bold text-xl">{event.country}</h1>
        </div>
        <div>
          <Link
            href="mailto:hello@kksmart.com"
            className="px-8 text-nowrap py-2 border border-gray-200 text-black rounded-full hover:border hover:bg-transparent hover:border-black bg-transparent"
          >
            Je participe
          </Link>
        </div>
      </div>
    </div>
  );
}
