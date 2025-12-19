import React from 'react'

const Badge = ({ children, variant = "default", icon }) => {
  const variants = {
    default: "bg-gray-700 text-gray-200",
    primary: "bg-blue-900/50 text-blue-300",
    success: "bg-green-900/50 text-green-300",
  }

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>
      {icon}
      {children}
    </span>
  )
}

export default Badge
