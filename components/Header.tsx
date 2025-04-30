"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const closeDropdown = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [closeDropdown])

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="CMZ Events Logo" width={150} height={50} />
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <div className="relative group" ref={dropdownRef}>
            <button className="text-gray-700 hover:text-gray-900" onClick={toggleDropdown}>
              Services
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link
                  href="/services#sound"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Sound Equipment
                </Link>
                <Link
                  href="/services#dj"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  DJ Services
                </Link>
                <Link
                  href="/services#lighting"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Lighting
                </Link>
                <Link
                  href="/services#microphones"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Microphones
                </Link>
              </div>
            )}
          </div>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </div>
        <button className="md:hidden" onClick={toggleDropdown}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-100" onClick={closeDropdown}>
            Home
          </Link>
          <Link href="/services" className="block py-2 px-4 text-sm hover:bg-gray-100" onClick={closeDropdown}>
            Services
          </Link>
          <Link href="/about" className="block py-2 px-4 text-sm hover:bg-gray-100" onClick={closeDropdown}>
            About Us
          </Link>
          <Link href="/contact" className="block py-2 px-4 text-sm hover:bg-gray-100" onClick={closeDropdown}>
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
