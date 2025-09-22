import ThemeToggle from './ThemeToggle'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex space-x-4">
        <Link href="/" className="text-lg font-semibold">Home</Link>
        <Link href="/about" className="text-lg font-semibold">About</Link>
      </div>
      <ThemeToggle />
    </nav>
  )
}