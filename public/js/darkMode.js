// On page load or when changing themes, best to add inline in `head` to avoid FOUC

const makeLight = () => {
    document.documentElement.classList.remove('dark')
    document.documentElement.setAttribute('data-theme', 'rentchexx')
}

const makeDark = () => {
    document.documentElement.classList.add('dark')
    document.documentElement.setAttribute('data-theme', 'rentchexxDark')
}

/**
 * @param {"dark"|"light"|undefined} theme 
 */
const setTheme = (theme) => {

    console.log('theme', theme)

    switch (theme) {
        case 'dark':
            makeDark()
            localStorage.theme = 'dark'
            break
        case 'light':
            makeLight()
            localStorage.theme = 'light'
            break
        default:
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) makeDark()
            else makeLight()
            delete localStorage.theme
            break
    }
}

const toggleDark = () => {
    switch (localStorage.theme) {
        case 'dark':
            setTheme('light')
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) localStorage.theme = 'light'
            else delete localStorage.theme
            break
        default:
            setTheme('dark')
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) localStorage.theme = 'dark'
            else delete localStorage.theme
            break
    }
}

setTheme(localStorage.theme)

// Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')