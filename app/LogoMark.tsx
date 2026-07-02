"use client"

import { useRef } from "react"

const CLICK_WINDOW_MS = 1500
const CLICKS_REQUIRED = 5

export default function LogoMark() {
  const count = useRef(0)
  const lastClick = useRef(0)

  function handleClick() {
    const now = Date.now()
    count.current = now - lastClick.current > CLICK_WINDOW_MS ? 1 : count.current + 1
    lastClick.current = now

    if (count.current >= CLICKS_REQUIRED) {
      count.current = 0
      window.location.href = "https://www.instagram.com/rohtak_harith/"
    }
  }

  return (
    <div className="flex justify-center mb-2">
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClick}
        className="cursor-pointer"
      >
        <rect width="56" height="56" fill="white" />
        <path d="M10 18 H46 L32 28 L46 38 H10 L24 28 Z" fill="black" />
      </svg>
    </div>
  )
}
