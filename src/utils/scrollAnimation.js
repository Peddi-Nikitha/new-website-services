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
        // Stop observing once animated
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all elements with scroll animation classes
  const animationClasses = [
    '.fade-in-on-scroll',
    '.fade-in-left-on-scroll',
    '.fade-in-right-on-scroll',
    '.scale-in-on-scroll'
  ]

  animationClasses.forEach(className => {
    const elements = document.querySelectorAll(className)
    elements.forEach(el => observer.observe(el))
  })

  return observer
}

