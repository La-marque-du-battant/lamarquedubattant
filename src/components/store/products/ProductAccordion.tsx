import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

interface ProductAccordionProps {
  handleCheckboxChange: (
    key: string | any,
    value: string | null,
    isArray?: boolean
  ) => void;
  filters: any;
}

export default function ProductAccordion({
  handleCheckboxChange,
  filters,
}: ProductAccordionProps) {
  return (
    <Accordion
      type="multiple"
      defaultValue={["item-1", "item-2", "item-3", "item-4"]}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Disponibilté</AccordionTrigger>
        <AccordionContent className="flex gap-2 flex-col">
          {["1", "0"].map((stock) => (
            <div className="flex items-center gap-2" key={stock}>
              <Checkbox
                id={stock}
                checked={filters.status === stock}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("status", checked ? stock : "")
                }
              />
              <label htmlFor={stock}>
                {stock == "1"
                  ? "En stock"
                  : stock == "0"
                  ? "En rupture de stock"
                  : ""}
              </label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Type de produits</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          {["t-shirt", "casquette", "polo", "bob", "pull"].map((name) => (
            <div className="flex items-center gap-2" key={name}>
              <Checkbox
                id={name}
                checked={filters.name === name}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("name", checked ? name : "")
                }
              />
              <label className="capitalize" htmlFor={name}>
                {name}
              </label>
            </div>
          ))}
        </AccordionContent>
        {/* <AccordionContent className="flex gap-2 items-center">
          <Checkbox id="stock" />
          <label htmlFor="stock">Shirts</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2 items-center">
          <Checkbox id="stock" />
          <label htmlFor="stock">Pull</label>
        </AccordionContent> */}
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Tailles</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <div key={size} className="flex items-center gap-2">
              <Checkbox
                id={`size-${size}`}
                checked={filters.size === size}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("size", checked ? size : "")
                }
              />
              <label className="capitalize" htmlFor={`size-${size}`}>
                {size}
              </label>
            </div>
          ))}
        </AccordionContent>
        {/* <AccordionContent className="flex gap-2 items-center">
          <Checkbox id="size-s" onChange={() => handleSizeChange("S")} />
          <label htmlFor="stock">S</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2 items-center">
          <Checkbox id="size-m" onChange={() => handleSizeChange("M")} />
          <label htmlFor="stock">M</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2 items-center">
          <Checkbox id="size-l" onChange={() => handleSizeChange("L")} />
          <label htmlFor="stock">L</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2 items-center">
          <Checkbox id="size-xl" onChange={() => handleSizeChange("XL")} />
          <label htmlFor="stock">XL</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2 items-center">
          <Checkbox id="size-xxl" onChange={() => handleSizeChange("XXL")} />
          <label htmlFor="stock">XXL</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2 items-center">
          <Checkbox
            id="size-unique"
            onChange={() => handleSizeChange("UNIQUE")}
          />
          <label htmlFor="stock">Taille unique</label>
        </AccordionContent> */}
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Couleur</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          {["Noir", "Beige", "Blanc"].map((color) => (
            <div key={color} className="flex items-center gap-2">
              <Checkbox
                id={`color-${color}`}
                checked={filters.color === color}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("color", checked ? color : "")
                }
              />
              <label htmlFor={`color-${color}`}>{color}</label>
            </div>
          ))}
        </AccordionContent>
        {/* <AccordionContent className="flex gap-2 items-center">
          <Checkbox id="color-beige" onChange={() => setColor("beige")} />
          <label htmlFor="stock">Beige</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2 items-center">
          <Checkbox id="color-blanc" onChange={() => setColor("blanc")} />
          <label htmlFor="stock">Blanc</label>
        </AccordionContent> */}
      </AccordionItem>
      {/* <AccordionItem value="item-5">
        <AccordionTrigger>Prix</AccordionTrigger>
        <AccordionContent className="flex gap-2 items-center">
          <Checkbox id="stock" />
          <label htmlFor="stock">Les classiques</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2 items-center">
          <Checkbox id="stock" />
          <label htmlFor="stock">Shine in black</label>
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>
  );
}
