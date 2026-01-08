// Scroll animation utility
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  // Observe all elements with fade-in-on-scroll class
  const elements = document.querySelectorAll('.fade-in-on-scroll')
  elements.forEach(el => observer.observe(el))

  return observer
}

