"use client"
import React, { useState } from 'react'
import { Palette } from 'lucide-react';
import Portfolio3 from './components/Portfolio3';

const ThemeChange = ({ changeTheme, setChangeTheme }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setChangeTheme(!changeTheme)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors animate-pulse"
      >
        <Palette size={20} />
      </button>
    </div>
  )
}

const Portfolio3Page = () => {
  const [changeTheme, setChangeTheme] = useState(false)

  return (
    <div>
      <ThemeChange changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
      <Portfolio3 />
    </div>
  )
}

export default Portfolio3Page