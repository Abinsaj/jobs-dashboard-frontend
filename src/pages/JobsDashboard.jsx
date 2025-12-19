import React, { useMemo } from 'react'
import PageLayout from '../components/layout/PageLayout'
import Header from '../components/layout/Header'
import SummaryCard from '../components/dashboard/SummaryCard'
import FiltersBar from '../components/dashboard/FiltersBar'
import { mockJobs } from '../data/jobs.mock'
import { useJobsFilter } from '../hooks/useJobsFilter'
// import Tabs from '../components/dashboard/Tabs'
import JobsGrid from '../components/dashboard/JobsGrid'

const JobsDashboard = () => {

  const {
    filteredJobs,
    searchQuery,
    setSearchQuery,
    selectedJobProfile,
    setSelectedJobProfile,
    selectedExperience,
    setSelectedExperience,
    selectedEmployementType,
    setSelectedEmploymentType,
    activeTab,
    setActiveTab,
    resetFilters
  } = useJobsFilter(mockJobs)

  const stats = useMemo(() => {
    const activeJobs = mockJobs.filter((job) => job.status === "active")
    return {
      totalJobs: activeJobs.length,
      applicationsReceived: activeJobs.reduce((sum, job) => sum + job.applied, 0),
      hired: 11,
    }
  }, [])

  const counts = useMemo(
    () => ({
      active: mockJobs.filter((job) => job.status === "active").length,
      draft: mockJobs.filter((job) => job.status === "draft").length,
      closed: mockJobs.filter((job) => job.status === "closed").length,
    }),
    [],
  )

  return (
    
    <PageLayout>
      <div className="w-full min-h-screen flex flex-col gap-6">

        <Header />
        <SummaryCard stats={stats} draftCount={counts.draft} />
        <FiltersBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedJobProfile={selectedJobProfile}
          setSelectedJobProfile={setSelectedJobProfile}
          selectedExperience={selectedExperience}
          setSelectedExperience={setSelectedExperience}
          selectedEmployementType={selectedEmployementType}
          setSelectedEmploymentType={setSelectedEmploymentType}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          resetFilters={resetFilters}
          counts={counts}
        />
        {/* <Tabs activeTab={activeTab} setActiveTab={setActiveTab} /> */}
          <JobsGrid jobs={filteredJobs} />
      </div>
    </PageLayout>
  )
}

export default JobsDashboard
