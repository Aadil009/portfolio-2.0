"use client"
import React, { useState } from 'react'
import { Terminal, Code, Palette, Briefcase, Mail, Layout, Github, Linkedin } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Preview from '@/components/simple_portfolio'
import Portfolio from '@/components/portfolio';
const ThemeChange = ({ changeTheme, setChangeTheme }) => {
  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => setChangeTheme(!changeTheme)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors animate-blink"
      >
        <Palette size={20} />
      </button>
    </div>
  )
}


const Test = () => {
  const [changeTheme, setChangeTheme] = useState(false)

  return (
    <div>
      <ThemeChange changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
      {changeTheme ? <Preview text={'text'} /> : <Portfolio />}
    </div>
  )
}

export default Test
