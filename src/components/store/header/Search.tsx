import { Fragment } from "react";
import { LuSearch } from "react-icons/lu";
export default function Search({ scrolled }: { scrolled: boolean }) {
  return (
    <Fragment>
      <form
        action=""
        className={`py-1 px-4 border flex gap-3 items-center rounded-2xl ${
          scrolled ? "border-slate" : "border-white"
        }`}
      >
        <input
          type="text"
          placeholder="Rechercher"
          className={`bg-transparent outline-none w-full  ${
            scrolled ? "placeholder:text-slate" : "placeholder:text-white"
          }`}
        />
        <button>
          <LuSearch className="w-5 h-5" />
        </button>
      </form>
    </Fragment>
  );
}
