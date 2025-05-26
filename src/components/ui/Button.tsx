interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles = "px-6 py-2 rounded-full font-medium transition-all duration-300"
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "bg-transparent text-white border border-white hover:bg-white hover:text-gray-900",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}>
      {children}
    </button>
  )
}
