export default function Button({ children, variant = "primary", icon, onClick, className = "" }) {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-700 hover:bg-gray-600 text-white",
    outline: "border border-gray-600 hover:bg-gray-800 text-white",
    draftbutton: 'bg-[#000B37] text-gray-100',
    postbutton:'bg-[#0032FB] text-gray-100'
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {icon}
      {children}
    </button>
  )
}