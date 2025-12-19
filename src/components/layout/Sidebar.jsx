import React from 'react'
import { Bell, Briefcase, ChevronDown, FileText, LayoutGrid, Menu, UserCheck, Users, X } from 'lucide-react'
import { useState } from 'react'

const Sidebar = () => {

    const [candidatesOpen, setCandidatesOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const menuItems = [
        { icon: LayoutGrid, label: 'dashboard', active: false },
        { icon: Bell, label: "Notification", active: false },
        { icon: Briefcase, label: "Jobs", active: true },
    ]

    return (
        <>
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar  px-4 py-3">
                <div className="relative flex items-center justify-center">

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="absolute left-0 bg-gray-800 p-2 rounded-lg text-white"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-black rounded-full"></div>
                        </div>
                        <span className="text-white text-xl font-semibold">Logoipsum</span>
                    </div>

                </div>
            </div>



            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-black/50 z-30 mt-[60px]" onClick={() => setMobileMenuOpen(false)} />
            )}

            <aside
                className={`
                    w-64 bg-sidebar flex flex-col  z-40
                    fixed left-0 transition-transform duration-300
                    lg:top-0
                    top-[60px] lg:h-screen h-[calc(100vh-60px)]
                    ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0
                    `}
            >
                <div className="hidden lg:block p-6 ">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-black rounded-full"></div>
                        </div>
                        <span className="text-white text-xl font-semibold">Logoipsum</span>
                    </div>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 py-4">
                    {menuItems.map((item) => (
                        <div key={item.label}>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-colors ${item.active
                                    ? "bg-gray-800 text-white border-l-4 border-blue-600"
                                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                                    }`}
                            >
                                <item.icon size={20} />
                                <span>{item.label}</span>
                            </button>
                        </div>
                    ))}

                    {/* Candidates with submenu */}
                    <div>
                        <button
                            onClick={() => setCandidatesOpen(!candidatesOpen)}
                            className="w-full flex items-center justify-between px-6 py-3 text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <Users size={20} />
                                <span>Candidates</span>
                            </div>
                            <ChevronDown size={16} className={`transition-transform ${candidatesOpen ? "rotate-180" : ""}`} />
                        </button>

                        {candidatesOpen && (
                            <div className="bg-black/20">
                                <button className="w-full flex items-center justify-between px-6 py-2.5 pl-14 text-sm text-gray-400 hover:text-white transition-colors">
                                    <div className="flex items-center gap-2">
                                        <FileText size={16} />
                                        <span>Registered</span>
                                    </div>
                                    <span className="text-xs bg-gray-800 px-2 py-0.5 rounded">1101</span>
                                </button>
                                <button className="w-full flex items-center justify-between px-6 py-2.5 pl-14 text-sm text-gray-400 hover:text-white transition-colors">
                                    <div className="flex items-center gap-2">
                                        <UserCheck size={16} />
                                        <span>Short listed</span>
                                    </div>
                                    <span className="text-xs bg-gray-800 px-2 py-0.5 rounded">86</span>
                                </button>
                            </div>
                        )}
                    </div>
                </nav>

                <div className="p-4  ">
                    <div className="flex items-center gap-3 bg-[#232324] p-2 rounded-xl">
                        <img
                            src="/user.jpg"  
                            alt="User avatar"
                            className="w-10 h-10 rounded-xl object-cover"
                        />                        <div className="flex-1">
                            <p className="text-white text-sm font-medium">User name</p>
                            <p className="text-gray-400 text-xs flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                Hiring manager
                            </p>
                        </div>
                        <ChevronDown size={16} className="text-gray-400" />
                    </div>
                </div>
            </aside>
        </>

    )
}

export default Sidebar
