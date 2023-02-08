const VARS = ['river',
    'riverside',
    'land',
    'header',
    'tagline',
    'contacts',
    'sections',
    'text',
    'skills'
];
const COLORS = VARS.reduce((a, k, i) => {
    a[k] = i < 3 ? '#ffffff' : '#000000'
    return a
}, {});


// Apply hash from URL
(document.location.hash || '#').substring(1)
    .split(';')
    .map(entry => entry.split('='))
    .filter(([k]) => !!COLORS[k])
    .forEach(([k, v]) => COLORS[k] = v)

// ... the reverse of that, put the colors back into the URL
function saveToHash() {
    document.location.hash = Object.keys(COLORS)
        .map((k) => `${k}=${COLORS[k]}`)
        .join(';')
}


function setCssVar(lvalue, rvalue) {
    document.documentElement.style.setProperty(lvalue, rvalue);
}

window.addEventListener("load", (event) => {
    const palette = document.getElementById('palette')
    const page = document.getElementById('page')

    Object.keys(COLORS).forEach((k, i) => {

        const label = document.createElement('label')
        label.appendChild(document.createTextNode(k))
        palette.appendChild(label);

        const input = document.createElement('input')
        input.value = COLORS[k]
        setCssVar(`--${k}`, input.value)
        input.setAttribute('placeholder', k)
        input.setAttribute('type', 'color')
        palette.appendChild(input);
        input.addEventListener('change', () => {
            setCssVar(`--${k}`, input.value)
            COLORS[k] = input.value
            saveToHash()
        })

    })

    // Hide the palete when not "in use", based on a heuristic:
    // - is the mouse moving?
    // - is the mouse within the window?
    page.addEventListener('mouseenter', () => controls.style.display = 'grid')
    page.addEventListener('mouseleave', (e) => {
        // "leaving" might be just go into an element inside the page
        // If that's the case, don't hide the cursor.
        if (e.clientX > 0 && e.clientX < page.clientWidth &&
            e.clientY > 0 && e.clientY < page.clientHeight)
            return;
        hidePaletteAfter(10000)
    })
    page.addEventListener('mousemove', () => {
        hidePaletteAfter(30000)
    })

    // Utility function to hide the color palette after a certain number
    // of milliseconds if not called again. 
    let hideTimeout = null

    function hidePaletteAfter(ms) {
        setCssVar('--palette-display', 'grid')
        if (hideTimeout) clearTimeout(hideTimeout)
        hideTimeout = setTimeout(() => {
            setCssVar('--palette-display', 'none')
            hideTimeout = null
        }, ms)
    }
});