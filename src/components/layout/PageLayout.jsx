import React from 'react'
import Sidebar from './Sidebar'

const PageLayout = ({children}) => {
  return (
    <div className='flex min-h-screen min-w-full bg-black overflow-x-hidden'>
        <Sidebar/>
        <main className="flex-1 min-w-0 w-full max-w-full lg:ml-64 p-4 md:p-6 lg:p-8">{children}</main>
    </div>
  )     
}

export default PageLayout
