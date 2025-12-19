import { Search } from "lucide-react"

export default function SearchInput({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="relative flex-1 lg:min-w-[200px] md:min-w-[100px]">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[#1a1a1a]  rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
      />
    </div>
  )
}