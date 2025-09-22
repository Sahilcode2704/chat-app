'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Switch } from '@/components/ui/switch'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-500 dark:text-gray-400">🌞</span>
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      />
      <span className="text-sm text-gray-500 dark:text-gray-400">🌙</span>
    </div>
  )
}