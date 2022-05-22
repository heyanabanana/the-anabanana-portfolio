import React from 'react'

export const HamIcon = ({ isOpen }) => {
  const hamLine = `h-1 w-6 rounded-full bg-black transition ease all duration-700${
    isOpen ? ' my-1 bg-amber-500 dark:bg-amber-300' : ' my-0.5 bg-primary-400 dark:bg-primary-400'
  }`

  return (
    <button className="group flex h-9 w-8 flex-col items-center justify-center rounded ">
      <div className={`${hamLine} ${isOpen ? 'translate-y-3 rotate-45' : ''}`} />
      <div className={`${hamLine} ${isOpen ? 'opacity-0' : ''}`} />
      <div className={`${hamLine} ${isOpen ? '-translate-y-3 -rotate-45 ' : ''}`} />
    </button>
  )
}
