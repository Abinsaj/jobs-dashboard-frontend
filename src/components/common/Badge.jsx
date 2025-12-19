import React from 'react'

const Badge = ({ children, variant = "default", icon }) => {
  const variants = {
    default: "bg-[#303822] text-gray-200",
    primary: "bg-[#22382E] text-gray-200",
    success: "bg-[#372238] text-gray-200",
  }

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium ${variants[variant]}`}>
      {icon}
      {children}
    </span>
  )
}

export default Badge
