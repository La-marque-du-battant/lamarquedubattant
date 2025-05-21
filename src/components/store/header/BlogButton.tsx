export default function BlogButton({
  title,
  scrolled,
}: {
  title: string;
  scrolled: boolean;
}) {
  return (
    <button
      className={`relative inline-flex items-center justify-center px-4 py-1 overflow-hidden border  rounded-full group ${
        scrolled ? "border-black" : " border-white"
      }`}
    >
      <span
        className={`absolute inset-0 w-full h-full px-4 py-1  transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-out ${
          scrolled ? "bg-black" : "bg-white"
        }`}
      ></span>
      <span
        className={`relative text-[12px] transition-colors duration-300 ease-in-out  ${
          scrolled
            ? "text-black group-hover:text-white"
            : "text-white group-hover:text-black"
        }`}
      >
        {title}
      </span>
    </button>
  );
}
