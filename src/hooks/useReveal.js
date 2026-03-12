import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Short delay so page content renders before observations start
    const timer = setTimeout(() => {
      const els = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale'
      )
      if (!els.length) return

      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible')
              io.unobserve(e.target)
            }
          }),
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      )

      els.forEach((el) => io.observe(el))
      return () => io.disconnect()
    }, 60)

    return () => clearTimeout(timer)
  }, [pathname])
}
