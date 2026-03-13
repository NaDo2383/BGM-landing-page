"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import {
  LayoutDashboard,
  Newspaper,
  FileText,
  LogOut,
  Menu,
  X,
} from "lucide-react"

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/news", label: "News", icon: Newspaper },
  { href: "/admin/outlook", label: "Outlook", icon: FileText },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsLoggedIn(sessionStorage.getItem("admin") === "true")
  }, [])

  // Don't render sidebar on login page or if not logged in
  const isLoginPage = pathname === "/admin/login"

  if (!mounted) {
    return (
      <div className='min-h-screen bg-[#0e0e0e] flex items-center justify-center'>
        <div className='w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin' />
      </div>
    )
  }

  if (isLoginPage || !isLoggedIn) {
    return <>{children}</>
  }

  const handleLogout = () => {
    sessionStorage.removeItem("admin")
    router.push("/admin/login")
  }

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin"
    return pathname.startsWith(href)
  }

  return (
    <div className='min-h-screen bg-[#0e0e0e] flex'>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-40 lg:hidden'
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-[240px] bg-[#111] border-r border-gray-800 flex flex-col transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}>
        {/* Logo */}
        <div className='h-16 flex items-center px-5 border-b border-gray-800'>
          <Link
            href='/admin'
            className='text-lg font-bold text-white flex items-center gap-2'>
            <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-sm font-bold'>
              B
            </div>
            <span>BGM Admin</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className='ml-auto lg:hidden text-gray-400 hover:text-white'>
            <X className='w-5 h-5' />
          </button>
        </div>

        {/* Navigation */}
        <nav className='flex-1 py-4 px-3 space-y-1'>
          {navItems.map((item) => {
            const active = isActive(item.href)
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-blue-600/20 text-blue-400"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}>
                <Icon className='w-5 h-5' />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className='p-3 border-t border-gray-800'>
          <button
            onClick={handleLogout}
            className='flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-red-400 hover:bg-red-600/10 transition-colors w-full'>
            <LogOut className='w-5 h-5' />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className='flex-1 flex flex-col min-w-0'>
        {/* Mobile header */}
        <header className='h-16 flex items-center px-4 border-b border-gray-800 lg:hidden bg-[#111]'>
          <button
            onClick={() => setSidebarOpen(true)}
            className='text-gray-400 hover:text-white'>
            <Menu className='w-6 h-6' />
          </button>
          <span className='ml-3 text-white font-semibold'>BGM Admin</span>
        </header>

        {/* Page content */}
        <main className='flex-1 overflow-y-auto'>{children}</main>
      </div>
    </div>
  )
}
