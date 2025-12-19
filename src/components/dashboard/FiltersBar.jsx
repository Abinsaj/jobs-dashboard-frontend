import React, { act, useState } from 'react'
import Select from '../common/Select'
import { Archive, Briefcase, FileEdit, Plus, RotateCcw, Search, SlidersHorizontal, X } from 'lucide-react'
import SearchInput from '../common/SearchInput'
import { mockJobs } from '../../data/jobs.mock'

const FiltersBar = ({
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
    resetFilters,
    counts
}) => {

    const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

    const profileOptions = [
        { value: "UI/UX Designer", label: "UI/UX Designer" },
        { value: "Frontend Developer", label: "Frontend Developer" },
        { value: "Backend Developer", label: "Backend Developer" },
        { value: "Full Stack Developer", label: "Full Stack Developer" },
        { value: "Product Manager", label: "Product Manager" },
        { value: "DevOps Engineer", label: "DevOps Engineer" },
        { value: "Data Scientist", label: "Data Scientist" },
        { value: "Mobile Developer", label: "Mobile Developer" },
        { value: "QA Engineer", label: "QA Engineer" },
        { value: "UX Researcher", label: "UX Researcher" },
        { value: "Content Writer", label: "Content Writer" },
        { value: "Security Engineer", label: "Security Engineer" },
    ]

    const experienceOptions = [
        { value: "0-2", label: "Exp 0 - 2" },
        { value: "2-4", label: "Exp 2 - 4" },
        { value: "4-6", label: "Exp 4 - 6" },
        { value: "6-8", label: "Exp 6 - 8" },
    ]

    const employmentOptions = [
        { value: "Full-time", label: "Full-time" },
        { value: "Contract", label: "Contract" },
        { value: "Part-time", label: "Part-time" },
    ]

    const tabs = [
        { icon: Briefcase, id: 'all', value: "all", count: mockJobs.length },
        { icon: Briefcase, id: "active", value: "active", count: counts.active },
        { icon: FileEdit, id: "draft", value: "draft", count: counts.draft },
        { icon: Archive, id: "closed", value: "closed", count: counts.closed },
    ]

    const activeIcon = tabs.find(tab => tab.value === activeTab)

    return (
        <>
            <div className='lg:hidden'>
                <SearchInput
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder="Enter a job title"
                />
            </div>
            <div className="flex items-start justify-between gap-1 lg:hidden mb-4">

                <button
                    onClick={() => setMobileFilterOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 p-2.5 bg-gray-800 rounded-lg text-white"
                >
                    <SlidersHorizontal size={18} />
                    Filters
                </button>

                <button
                    onClick={() => resetFilters()}
                    className="bg-gray-800 flex items-center p-2.5 gap-2 px-4 py-2 rounded-lg">
                    <RotateCcw size={20} className="text-white" />
                </button>

                <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg text-gray-300 text-sm">
                    {activeIcon !== undefined &&
                        <activeIcon.icon size={15} />
                    }
                    <select
                        value={tabs.id}
                        onChange={(e) => setActiveTab(e.target.value)}
                        className='appearance-none bg-transparent border-gray-800 focus:outline-none focus:border-gray-600 '
                        name="" id=""
                    >
                        <option value="">{activeTab}</option>
                        {tabs
                            .filter(tab => tab.value !== activeTab)
                            .map(tab => (
                                <option key={tab.id} value={tab.value}>
                                    {tab.id}
                                </option>
                            ))}
                    </select>
                    {activeIcon !== undefined &&
                        <span className="bg-gray-700 px-2 py-0.5 rounded text-xs">
                            {activeIcon.count}
                        </span>
                    }
                </div>
            </div>


            <div className="hidden lg:flex flex-row gap-4 items-stretch mb-6">
                <div className="flex flex-wrap gap-3 items-center flex-1">
                    <div className="flex-1 min-w-[200px] max-w-xs">
                        <SearchInput
                            value={searchQuery}
                            onChange={setSearchQuery}
                            placeholder="Enter a job title"
                        />
                    </div>

                    <Select
                        value={selectedJobProfile}
                        onChange={setSelectedJobProfile}
                        options={profileOptions}
                        placeholder="Job Profile"
                    />

                    <Select
                        value={selectedExperience}
                        onChange={setSelectedExperience}
                        options={experienceOptions}
                        placeholder="Exp 2 - 6"
                    />

                    <Select
                        value={selectedEmployementType}
                        onChange={setSelectedEmploymentType}
                        options={employmentOptions}
                        placeholder="Employment type"
                    />

                    <button
                        onClick={() => resetFilters()}
                        className="bg-gray-800 p-2.5 rounded-lg">
                        <RotateCcw size={20} className="text-white" />
                    </button>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-gray-300 text-sm whitespace-nowrap">
                    {activeIcon !== undefined &&
                        <activeIcon.icon size={15} />
                    }
                    <select
                        value={tabs.id}
                        onChange={(e) => setActiveTab(e.target.value)}
                        className='appearance-none bg-transparent border-gray-800 focus:outline-none focus:border-gray-600 '
                        name="" id=""
                    >
                        <option value="">{activeTab}</option>
                        {tabs
                            .filter(tab => tab.value !== activeTab)
                            .map(tab => (
                                <option key={tab.id} value={tab.value}>
                                    {tab.id}
                                </option>
                            ))}
                    </select>
                    {activeIcon !== undefined &&
                        <span className="bg-gray-700 px-2 py-0.5 rounded text-xs">
                            {activeIcon.count}
                        </span>
                    }

                </div>
            </div>

            {mobileFilterOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/60 z-40"
                        onClick={() => setMobileFilterOpen(false)}
                    />

                    <div className="fixed top-0 left-0 h-full w-80 bg-neutral-900 z-50 p-5 transition-transform">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-white">Filters</h3>
                            <button onClick={() => setMobileFilterOpen(false)}>
                                <X size={22} className="text-white" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-4">
                            <SearchInput
                                value={searchQuery}
                                onChange={setSearchQuery}
                                placeholder="Enter a job title"
                            />

                            <Select
                                value={selectedJobProfile}
                                onChange={setSelectedJobProfile}
                                options={profileOptions}
                                placeholder="Job Profile"
                            />

                            <Select
                                value={selectedExperience}
                                onChange={setSelectedExperience}
                                options={experienceOptions}
                                placeholder="Experience"
                            />

                            <Select
                                value={selectedEmployementType}
                                onChange={setSelectedEmploymentType}
                                options={employmentOptions}
                                placeholder="Employment type"
                            />

                            <button
                                onClick={() => setMobileFilterOpen(false)}
                                className="bg-blue-600 hover:bg-blue-500 py-2 rounded-lg text-white">
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default FiltersBar
