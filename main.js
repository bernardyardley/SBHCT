// Navbar background change on scroll
const nav = document.getElementById('mainNav')
const updateNav = () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }
}
window.addEventListener('scroll', updateNav, { passive: true })
updateNav()

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href')
    if (targetId === '#' || targetId.length < 2) return
    const target = document.querySelector(targetId)
    if (!target) return
    e.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})

// Reveal-on-scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 }
)

document
  .querySelectorAll('.cause-card, .about-statement, .apply-card, .apply-item, .deadline-box, .grant-box')
  .forEach((el) => {
    el.classList.add('reveal')
    observer.observe(el)
  })
