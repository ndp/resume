const palette = document.getElementById('palette')
const page = document.getElementById('page')


// COLORS
const VAR_KEYS = [
  'target',
  'river',
  'riverside',
  'land',
  'header',
  'tagline',
  'contacts',
  'sections',
  'text',
  'skills',
]
const VARS = VAR_KEYS.reduce((a, k, i) => {
  a[k] = k === 'target' ? 'ngo' : i < 4 ? '#ffffff' : '#000000'
  return a
}, {});


// Apply hash from URL
(document.location.hash || '#').substring(1)
                               .split(';')
                               .map(entry => entry.split('='))
                               .filter(([k]) => !!VARS[k])
                               .forEach(([k, v]) => VARS[k] = v)

// ... the reverse of that, put the colors back into the URL
function saveToHash () {
  document.location.hash = Object.keys(VARS)
                                 .map((k) => `${k}=${VARS[k]}`)
                                 .join(';')
}


function setCssVar (lvalue, rvalue) {
  document.documentElement.style.setProperty(lvalue, rvalue)
}


Object.keys(VARS).forEach((k, i) => {
  if (k === 'target')
    createTargetSelector()
  else
    createColorPicker(k)
})

// Hide the palete when not "in use", based on a heuristic:
// - is the mouse moving?
// - is the mouse within the window?
page.addEventListener('mouseenter', () => palette.style.display = 'grid')
page.addEventListener('mouseleave', (e) => {
  // "leaving" might be just go into an element inside the page
  // If that's the case, don't hide the cursor.
  if (e.clientX > 0 && e.clientX < page.clientWidth &&
      e.clientY > 0 && e.clientY < page.clientHeight)
    return
  hidePaletteAfter(10000)
})
page.addEventListener('mousemove', () => {
  hidePaletteAfter(30000)
})

// Utility function to hide the color palette after a certain number
// of milliseconds if not called again.
let hideTimeout = null

function hidePaletteAfter (ms) {
  setCssVar('--palette-display', 'grid')
  if (hideTimeout) clearTimeout(hideTimeout)
  hideTimeout = setTimeout(() => {
    setCssVar('--palette-display', 'none')
    hideTimeout = null
  }, ms)
}


function createColorPicker (k) {
  const label = document.createElement('label')
  label.appendChild(document.createTextNode(k))
  palette.appendChild(label)

  const input = document.createElement('input')
  input.value = VARS[k]
  setCssVar(`--${k}`, input.value)
  input.setAttribute('placeholder', k)
  input.setAttribute('type', 'color')
  palette.appendChild(input)
  input.addEventListener('change', () => {
    setCssVar(`--${k}`, input.value)
    VARS[k] = input.value
    saveToHash()
  })
}

function createTargetSelector () {
  const targets = ['ngo', 'start-up']
  const label = document.createElement('label')
  label.appendChild(document.createTextNode('target'))
  palette.appendChild(label)

  const select = document.createElement('select')
  targets.forEach(target => {
    const option = document.createElement('option')
    option.setAttribute('value', target)
    if (target === VARS['target']) option.setAttribute('selected', true)
    option.appendChild(document.createTextNode(target))
    select.appendChild(option)
  })
  palette.appendChild(select)

  select.addEventListener('change', () => {
    VARS['target'] = select.value
    saveToHash()
    setPageCssClass()
  })

  setPageCssClass()

  function setPageCssClass () {
    page.classList.remove(...targets)
    page.classList.add(select.value)
  }
}
