import React from 'react'

const StatCard = ({title, value, icon: Icon, bgColor, pattern}) => {
  return (
    <div
      className={`${bgColor} rounded-xl md:rounded-2xl p-4 md:p-6 relative overflow-hidden`}
      style={{ minHeight: "100px" }}
    >
      <div className="relative z-10">
        <p className="text-gray-200 text-xs md:text-sm mb-1 md:mb-2">{title}</p>
        <p className="text-white text-2xl md:text-4xl font-bold">{value}</p>
      </div>

      <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 opacity-20">
        <Icon size={60} className="md:w-20 md:h-20" strokeWidth={1.5} />
      </div>

      {pattern && <div className="absolute right-0 bottom-0 opacity-10">{pattern}</div>}
    </div>
  )
}

export default StatCard
