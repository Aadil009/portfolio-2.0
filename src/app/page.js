"use client"
import React, { useState } from 'react'
import { Terminal, Code, Palette, Briefcase, Mail, Layout, Github, Linkedin } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Preview from '@/components/simple_portfolio'
import Portfolio from '@/components/portfolio';
import Portfolio3 from '../../portfolio3.0/components/Portfolio3';

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

const Test = () => {
  const [currentTheme, setCurrentTheme] = useState(0) // 0: Portfolio, 1: Preview, 2: Portfolio3

  const cycleTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % 3)
  }

  const renderCurrentPortfolio = () => {
    switch(currentTheme) {
      case 0:
        return <Portfolio3 />
      case 1:
        return <Preview text={'text'} />
      case 2:
        return <Portfolio />
      default:
        return <Portfolio />
    }
  }

  return (
    <div>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={cycleTheme}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors animate-pulse"
        >
          <Palette size={20} />
        </button>
        <div className="text-xs text-center mt-1 text-gray-600">
          {currentTheme === 0 ? 'Modern' : currentTheme === 1 ? 'Simple' : 'Terminal'}
        </div>
      </div>
      {renderCurrentPortfolio()}
    </div>
  )
}

export default Test
