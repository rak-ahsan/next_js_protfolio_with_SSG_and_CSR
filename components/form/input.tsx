import { Input } from "@/components/ui/input";
import { HiOutlineSearch } from "react-icons/hi";

interface Props {
  value?: string;
  placeholder?: string;
  type?: string;
}
export function FormInput({ value, placeholder, type }: Props) {
  return (
    <div>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        className="relative pl-7"
      />
      <p className="absolute top-6 pl-2">
        <HiOutlineSearch  size={18} color="gray"/>
      </p>
    </div>
  );
}
