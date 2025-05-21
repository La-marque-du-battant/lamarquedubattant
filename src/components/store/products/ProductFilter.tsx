import { Checkbox } from "@/components/ui/checkbox";
import ProductAccordion from "./ProductAccordion";
import { useEffect, useState } from "react";

interface Filter {
  name?: string;
  size?: string[];
  color?: string | any;
  status?: string | any;
  category_id?: string;
  collection_id?: string;
  sort_price?: "asc" | "desc" | any;
}

interface ProductFilterProps {
  setFilters: (filters: Filter) => void;
}

export default function ProductFilter({ setFilters }: ProductFilterProps) {
  const [filters, setLocalFilters] = useState<Filter>({
    name: "",
    size: [],
    color: "",
    status: "",
    sort_price: "",
  });

  const handleCheckboxChange = (
    key: keyof Filter,
    value: string | null,
    isArray: boolean = false
  ) => {
    setLocalFilters((prev) => {
      if (isArray && value) {
        const values = prev[key] as string[];
        if (values?.includes(value)) {
          return {
            ...prev,
            [key]: values.filter((item) => item !== value),
          };
        }
        return { ...prev, [key]: [...(values || []), value] };
      }
      return { ...prev, [key]: value };
    });
  };

  // Synchroniser les filtres locaux avec le parent
  useEffect(() => {
    setFilters(filters);
  }, [filters]);

  return (
    <div className="w-full">
      {/* Filter */}
      <h1 className="pb-2 text-xl border-b border-gray-200 font-bold">
        Filtres
      </h1>
      <ProductAccordion
        handleCheckboxChange={handleCheckboxChange}
        filters={filters}
      />
      <div className="flex flex-col gap-2 mt-2">
        <h1 className="text-xl font-bold">Tries</h1>
        {/* <div className="flex gap-2 items-center text-[14px]">
          <Checkbox id="sort" />
          <label htmlFor="sort">Nouveautés</label>
        </div> */}
        <div className="flex gap-2 items-center text-[14px]">
          <Checkbox
            id="sort-asc"
            checked={filters.sort_price === "asc"}
            onCheckedChange={(checked) =>
              handleCheckboxChange("sort_price", checked ? "asc" : "")
            }
          />
          <label htmlFor="sort-asc">Prix croissant</label>
        </div>
        <div className="flex gap-2 items-center text-[14px]">
          <Checkbox
            id="sort-desc"
            checked={filters.sort_price === "desc"}
            onCheckedChange={(checked) =>
              handleCheckboxChange("sort_price", checked ? "desc" : "")
            }
          />
          <label htmlFor="sort-desc">Prix décroissant</label>
        </div>
        {/* <div className="flex gap-2 items-center text-[14px]">
          <Checkbox id="sort" />
          <label htmlFor="sort">Les plus vendus</label>
        </div> */}
      </div>
    </div>
  );
}
