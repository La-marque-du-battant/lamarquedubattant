import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";

export default function CustomBlackButton({
  title,
  loading,
}: {
  title: string;
  loading: boolean;
}) {
  return (
    <Button
      type="submit"
      className={`relative inline-flex items-center w-full justify-center px-8 py-2 overflow-hidden border rounded-full group bg-black border-black`}
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
