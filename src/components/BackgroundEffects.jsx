import { useEffect } from 'react'

export default function BackgroundEffects(){
  useEffect(() => {
    const moveGlow = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--y', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', moveGlow)
    return () => window.removeEventListener('mousemove', moveGlow)
  }, [])

  return null
}
