'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-colors"
    >
      {theme === 'light' ? '🌞 Light' : '🌙 Dark'}
    </button>
  )
}