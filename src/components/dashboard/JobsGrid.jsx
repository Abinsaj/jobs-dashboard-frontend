import React from 'react'
import JobCard from './JobCard'

const JobsGrid = ({jobs}) => {
  if (jobs.length === 0) {
    return (
      <div className="w-full flex items-center justify-center py-16">
        <p className="text-gray-400 text-lg">No jobs found matching your criteria</p>
      </div>
    )
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}

export default JobsGrid
