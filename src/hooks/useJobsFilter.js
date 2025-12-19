import { useMemo, useState } from "react"

export const useJobsFilter = (jobs) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedJobProfile, setSelectedJobProfile] = useState("")
  const [selectedExperience, setSelectedExperience] = useState("")
  const [selectedEmployementType, setSelectedEmploymentType] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const resetFilters = () => {
    setSearchQuery("")
    setSelectedJobProfile("")
    setSelectedExperience("")
    setSelectedEmploymentType("")
    setActiveTab('all')
  }

  const filteredJobs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return jobs.filter((job) => {
      if (activeTab !== "all" && job.status !== activeTab) {
        return false
      }

      if (query) {
        const searchableText = `
          ${job.title}
          ${job.companyName}
          ${job.location}
          ${job.profile}
        `.toLowerCase()

        if (!searchableText.includes(query)) {
          return false
        }
      }

      if (selectedJobProfile && job.profile !== selectedJobProfile) {
        return false
      }

      if (selectedExperience) {
        const [minExp, maxExp] = selectedExperience.split("-").map(Number)

        const jobMin = job.experienceMin
        const jobMax = job.experienceMax

        if (jobMax < minExp || jobMin > maxExp) {
          return false
        }
      }

      if (
        selectedEmployementType &&
        job.employmentType !== selectedEmployementType
      ) {
        return false
      }

      return true
    })
  }, [
    jobs,
    searchQuery,
    selectedJobProfile,
    selectedExperience,
    selectedEmployementType,
    activeTab,
  ])

  return {
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
  }
}

