import React from 'react'
import StatCard from './StatCard'
import { Briefcase, FileEdit, FileText, Plus, UserCheck } from 'lucide-react'
import Button from '../common/Button'

const SummaryCard = ({stats, draftCount}) => {
  return (
       <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mb-6 md:mb-8 items-stretch">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 flex-1">
        <StatCard
          title="Total Jobs Posted"
          value={stats.totalJobs}
          icon={Briefcase}
          bgColor="bg-gradient-to-br from-indigo-900/60 to-indigo-800/40"
        />
        <StatCard
          title="Application received"
          value={stats.applicationsReceived}
          icon={FileText}
          bgColor="bg-gradient-to-br from-rose-900/60 to-rose-800/40"
        />
        <StatCard
          title="Hired"
          value={stats.hired}
          icon={UserCheck}
          bgColor="bg-gradient-to-br from-teal-900/60 to-teal-800/40"
        />
      </div>

      <div className="flex lg:flex-col gap-3 justify-start lg:justify-start">
        <Button variant="secondary" icon={<FileEdit size={18} />}>
          <span className="hidden sm:inline">Drafts</span>
          <span className="sm:hidden">Draft</span>
          <span className="bg-gray-600 px-2 py-0.5 rounded text-xs ml-1">{draftCount}</span>
        </Button>
        <Button variant="primary" icon={<Plus size={18} />}>
          <span className="hidden sm:inline">Post New Job</span>
          <span className="sm:hidden">Post</span>
        </Button>
      </div>
    </div>
  )
}

export default SummaryCard
