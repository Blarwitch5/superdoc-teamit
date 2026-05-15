export function initUserDropdown(btnId = 'user-btn', dropdownId = 'user-dropdown') {
  const btn      = document.getElementById(btnId)
  const dropdown = document.getElementById(dropdownId)
  if (!btn || !dropdown) return

  btn.addEventListener('click', (e) => {
    e.stopPropagation()
    const open = dropdown.classList.toggle('open')
    btn.setAttribute('aria-expanded', String(open))
  })
  document.addEventListener('click', () => {
    dropdown.classList.remove('open')
    btn.setAttribute('aria-expanded', 'false')
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdown.classList.remove('open')
      btn.setAttribute('aria-expanded', 'false')
    }
  })
}
