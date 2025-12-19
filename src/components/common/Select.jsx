import { ChevronDown } from 'lucide-react'
import React from 'react'

const Select = ({value, onChange, options, placeholder}) => {
  return (
    <div className="relative w-full sm:w-auto">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 md:px-4 py-2.5 pr-10 text-white text-sm  "
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
    </div>
  )
}

export default Select
