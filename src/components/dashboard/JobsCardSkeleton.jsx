import React from "react"

const JobCardSkeleton = () => {
  return (
    <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-4 md:p-5 animate-pulse">
      
      <div className="flex items-start justify-between mb-4">
        <div className="space-y-2 w-full">
          <div className="h-4 w-3/5 bg-gray-700 rounded"></div>
          <div className="h-3 w-2/5 bg-gray-700 rounded"></div>
        </div>
        <div className="h-6 w-6 bg-gray-700 rounded"></div>
      </div>

      <div className="flex gap-2 mb-4">
        <div className="h-6 w-16 bg-gray-700 rounded-full"></div>
        <div className="h-6 w-20 bg-gray-700 rounded-full"></div>
        <div className="h-6 w-14 bg-gray-700 rounded-full"></div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="h-3 w-full bg-gray-700 rounded"></div>
        <div className="h-3 w-5/6 bg-gray-700 rounded"></div>
      </div>

      <div className="flex items-center justify-between">
        <div className="h-3 w-24 bg-gray-700 rounded"></div>
        <div className="h-8 w-24 bg-gray-700 rounded-md"></div>
      </div>

    </div>
  )
}

export default JobCardSkeleton
