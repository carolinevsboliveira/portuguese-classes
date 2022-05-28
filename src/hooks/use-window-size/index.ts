import { useEffect, useState } from 'react'

type SizeProps = {
  width: number
  height: number
}
export function useWindowSize(): SizeProps {
  const [windowSize, setWindowSize] = useState<SizeProps>({
    width: 0,
    height: 0
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
