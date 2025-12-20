import { Briefcase, Calendar, DollarSign, MoreVertical } from 'lucide-react'
import React from 'react'
import Badge from '../common/Badge'

const JobCard = ({ job }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-md md:p-0.5 transition-all flex flex-col h-full">
      <div className="flex justify-between p-2 items-start mb-2">
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-base md:text-lg font-semibold mb-1 truncate">
            {job.title}
          </h3>
          <p className="text-gray-400 text-xs italic md:text-sm">Posted: {job.postedTime}</p>
        </div>
        <button className="text-gray-400 hover:text-white ml-2 flex-shrink-0">
          <MoreVertical size={20} />
        </button>
      </div>

      <div className="flex flex-wrap p-2 gap-2 mb-2">
        <Badge variant="default" icon={<Briefcase size={12} />}>
          {job.employmentType}
        </Badge>
        <Badge variant="primary" icon={<DollarSign size={12} />}>
          {job.salaryMin} - {job.salaryMax} {job.currency}
        </Badge>
        <Badge variant="success" icon={<Calendar size={12} />}>
          {job.experienceMin} - {job.experienceMax} Years
        </Badge>
      </div>

      <p className="text-gray-300 text-xs md:text-sm px-2 mb-2 line-clamp-2">
        {job.description}
      </p>

      <div className="mt-auto mb-px flex items-start pt-2 bg-gradient-to-br from-black/90 to-black/50 w-full p-5 rounded-md">
        <div className="text-center flex-1">
          <p className="text-white text-lg md:text-xl font-semibold">{job.applied}</p>
          <p className="text-gray-400 text-xs">Applied</p>
        </div>
        <div className="text-center flex-1">
          <p className="text-white text-lg md:text-xl font-semibold">{job.clicked}</p>
          <p className="text-gray-400 text-xs">Clicked</p>
        </div>
        <div className="text-center flex-1">
          <p className="text-white text-lg md:text-xl font-semibold">{job.underProcess}</p>
          <p className="text-gray-400 text-xs">Under process</p>
        </div>
      </div>
    </div>
  )
}

export default JobCard
