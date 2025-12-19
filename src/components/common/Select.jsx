import { ChevronDown } from 'lucide-react'
import React from 'react'

const Select = ({ value, onChange, options, placeholder }) => {
  return (
    <div className="relative w-full sm:w-auto">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={` appearance-none bg-[#1a1a1a] rounded-lg px-4 py-2.5 pr-12 min-w-[160px] text-xs border-0 outline-none focus:ring-0
    ${value === ""
            ? "text-gray-500"
            : "text-gray-200"
          }
  `}
      >
        <option className='text-sm' value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        size={16}
      />
    </div>
  )
}

export default Select
