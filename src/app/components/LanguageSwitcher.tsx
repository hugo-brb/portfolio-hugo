'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { useLocale } from 'next-intl'

const LANGUAGE_KEY = 'preferred-language'
const locales = ['fr', 'en', 'it']

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()
  const [selectedLocale, setSelectedLocale] = useState(() => {
    // Initialize from localStorage if available, otherwise use currentLocale
    if (typeof window !== 'undefined') {
      return localStorage.getItem(LANGUAGE_KEY) || currentLocale
    }
    return currentLocale
  })

  useEffect(() => {
    // Sync localStorage with the current locale
    if (typeof window !== 'undefined') {
      const storedLocale = localStorage.getItem(LANGUAGE_KEY)
      if (storedLocale && storedLocale !== currentLocale) {
        changeLocale(storedLocale)
      }
    }
  }, []) // Run only once on mount

  const changeLocale = useCallback((newLocale: string) => {
    // Store the new locale preference
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_KEY, newLocale)
    }

    // Remove all locale codes from URL
    let pathWithoutLocale = pathname.split('/').filter(segment => !locales.includes(segment)).join('/')
    
    // Ensure path starts with '/'
    if (!pathWithoutLocale.startsWith('/')) {
      pathWithoutLocale = '/' + pathWithoutLocale
    }

    // Build new URL with new locale code
    const newPath = `/${newLocale}${pathWithoutLocale}`

    setSelectedLocale(newLocale)
    router.push(newPath)
  }, [router, pathname])

  return (
    <select 
      name="trans" 
      id="trans" 
      value={selectedLocale}
      onChange={(e) => changeLocale(e.target.value)}
      className="appearance-none bg-transparent border-none focus:outline-none px-1 text-center font-semibold"
    >
      <option value="fr" className="text-center text-[#67348b]">fr</option>
      <option value="en" className="text-center text-[#67348b]">en</option>
      <option value="it" className="text-center text-[#67348b]">it</option>
    </select>
  )
}