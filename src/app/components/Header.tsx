'use client'

import Link from "next/link"
import { useState } from "react"
import { NavItem } from "@/types"

interface HeaderProps {
  navItems: NavItem[]
}



export default function Header({ navItems }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-white text-blue-800 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
              BS
            </div>
            <span className="text-xl font-bold">Bhrikuti Secondary School</span>
           </Link>

           
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-blue-200 transition duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="bg-white text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-200"
            >
              Login
            </Link>
            </nav>

              {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 hover:bg-blue-700 px-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="block bg-white text-blue-800 px-4 py-2 rounded-lg mt-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </nav>
        )}
        
      </div>
    </header>
  )
}
