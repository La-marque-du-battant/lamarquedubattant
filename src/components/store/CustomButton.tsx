import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";

export default function CustomButton({
  title,
  loading,
}: {
  title: string;
  loading: boolean;
}) {
  return (
    <Button
      className={`relative w-full inline-flex items-center justify-center px-8 py-2 overflow-hidden border rounded-full group bg-transparent border-white`}
    >
      <span
        className={`absolute inset-0 w-full h-full px-8 py-2  transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-out bg-white`}
      ></span>
      <span
        className={`relative  transition-colors duration-300 ease-in-out text-white group-hover:text-black`}
      >
        {loading ? <LoaderIcon /> : <span>{title}</span>}
      </span>
    </Button>
  );
}
