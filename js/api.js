const form = document.getElementById('form')
const filterInput = document.querySelector('#filter')
const sectionOfCountries = document.getElementById('countries')
let countriesList = []

async function getCountries() {
    let res = await fetch('https://restcountries.com/v3.1/all');
    let data = await res.json()
    countriesList.push(data)
    setCountries(data)
}

getCountries()
