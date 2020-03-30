import { useLayoutEffect, useState } from 'react'

const useMobileWidth = () => {
  const [width, setWidth] = useState(0)
  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateWidth)
    updateWidth()
    return () => window.removeEventListener('resize', updateWidth)
  }, [])
  return width < 768
}

export default useMobileWidth
