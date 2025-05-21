export default function Input({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-slate-100 w-full py-2 px-6 rounded-full focus:outline-none focus:ring-1 focus:ring-black text-black placeholder:text-sm"
    />
  );
}
