const html = document.querySelector('html')
const themeBtn = document.querySelector('#theme')
let theme = 'dark'

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const search = document.getElementById('search').value
    searchCountries(search)
})

filterInput.addEventListener('change', (e) => {
    e.preventDefault()
    filterCountries(e.target.value)
})

// themeBtn.addEventListener('click', (e) => {
//     e.preventDefault()
// });
function changeMode(){
    theme = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('mode', theme);
    getTheme()
}
function getTheme() {
    const getTheme = localStorage.getItem('mode')
    html.dataset.theme = getTheme
}
