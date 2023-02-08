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
    const controls = document.getElementById('controls')
    const page = document.getElementById('page')

    Object.keys(COLORS).forEach((k, i) => {

        const input = document.createElement('input')
        input.value = COLORS[k]
        setCssVar(`--${k}`, input.value)
        input.setAttribute('placeholder', k)
        input.setAttribute('type', 'color')
        const label = document.createElement('label')
        label.appendChild(document.createTextNode(k))
        controls.appendChild(label);
        controls.appendChild(input);

        input.addEventListener('change', () => {
            setCssVar(`--${k}`, input.value)
            COLORS[k] = input.value
            saveToHash()
        })

    })

    page.addEventListener('mouseenter', () => controls.style.display = 'grid')
    page.addEventListener('mouseleave', (e) => {
        if (e.clientX > 0 && e.clientX < page.clientWidth &&
            e.clientY > 0 && e.clientY < page.clientHeight)
            return;
        hideIn(10000)
    })
    page.addEventListener('mousemove', () => {
        hideIn(30000)
    })

    let hideTimeout = null

    function hideIn(ms) {
        controls.style.display = 'grid'
        if (hideTimeout) clearTimeout(hideTimeout)
        hideTimeout = setTimeout(() => {
            controls.style.display = 'none'
            hideTimeout = null
        }, ms)
    }
});