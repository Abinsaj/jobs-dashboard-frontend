# Jobs Dashboard 

A fully functional and responsive Jobs Dashboard built with React, Vite, and Tailwind CSS. Built for managing and visualizing job listings with filtering, tabs, and detailed job cards.


## Features

- ✅ Responsive layout (desktop, tablet, mobile)
- ✅ Working search functionality
- ✅ Multiple filter options (Job Profile, Experience, Employment Type)
- ✅ Tab navigation (Active, Drafts, Closed)
- ✅ Mock data with 15 job entries
- ✅ Clean component architecture
- ✅ Professional folder structure
- ✅ Skeleton loading states for better UX

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Getting Started

### Installation

1. Clone or download the project

2. Install dependencies:

npm install


3. Run development server:

npm run dev


4. Open browser at `http://localhost:5173`

5. Build for production:

npm run build


6. Preview production build:

npm run preview


## Project Structure


src/
├── assets/          # Static assets
├── components/
│   ├── layout/      # Layout components (Sidebar, Header, PageLayout)
│   ├── dashboard/   # Dashboard components (JobCard, JobsGrid, Filters, etc.)
│   └── common/      # Reusable components (Button, Badge, Select, SearchInput)
├── data/            # Mock data
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── App.jsx          # Root component
├── main.jsx         # Entry point
└── index.css        # Global styles with Tailwind directives


## Features Implemented

### UI Components
- Sidebar with navigation and user profile
- Summary cards with job statistics
- Filter bar with search and dropdowns
- Tab navigation for job status
- Job cards grid with detailed information
- Loading skeletons for job cards

### Functionality
- **Search**: Filter jobs by title
- **Filters**: Filter by job profile, experience range, and employment type
- **Tabs**: Switch between Active, Draft, and Closed jobs
- **Responsive**: Fully responsive design for all screen sizes
- **Loading States**: Skeleton screens while data loads

## Mock Data

The application includes 15 mock job entries with the following fields:
- Job title and description
- Employment type (Full-time, Contract)
- Salary range
- Experience requirements
- Application statistics (Applied, Clicked, Under process)
- Job status (active, draft, closed)

## Design Decisions

- **Component Structure**: Organized into layout, dashboard, and common components for reusability
- **State Management**: Used custom `useJobsFilter` hook for centralized filter logic
- **Styling**: Tailwind CSS for utility-first styling matching the dark theme
- **Icons**: Lucide React for consistent, lightweight iconography
- **Loading States**: Skeleton components for better perceived performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend API integration
- User authentication
- Job posting creation form
- Advanced filtering options
- Job application tracking
- Email notifications

