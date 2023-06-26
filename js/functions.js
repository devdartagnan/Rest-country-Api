function setCountries(e) {
    const countries = e;
    countries.forEach(country => insertCountry(country))
}

function searchCountries(e) {
    let capitalize = capitalLetter(e)
    let resultCountry = countriesList[0].filter((country) =>
        country.name.common === capitalize)

    sectionOfCountries.innerHTML = ''
    resultCountry.forEach(country => insertCountry(country))
}

function filterCountries(e) {
    let listOfFilteredCountries = countriesList[0].filter((country) => country.region === e)
    sectionOfCountries.innerHTML = ''
    listOfFilteredCountries.map(country => insertCountry(country))
}

function insertCountry(country) {
    sectionOfCountries.innerHTML += `
    <figure class="country-set">
    <img class="country-img" src= "${country.flags.svg}" alt= "country flag of ${country.name.common}">
    <div class="country-info" >
        <h2 class="title" ><b>${country.name.common}</b></h2>
        <p><b>Population:</b> ${country.population}</p>
        <p><b>Region:</b> ${country.region}</p>
        <p><b>Capital:</b> ${country.capital}</p>
    </div>
    </figure > `
    getImages()
}

function capitalLetter(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

function goToHomePage() {
    window.location.href = './index.html'
}

function goToDetailsPage() {
    window.location.href = './details.html'
}

function getImages() {
    let images = document.querySelectorAll('.country-img');
    imagesLoop(images)
    return images;
}

function imagesLoop(images) {
    images.forEach(
        image => {
            image.addEventListener('click', (e) => setLocal(e))
        }
    );
}

function setLocal(e) {
    countrySrc = e.target.src;
    defineCountryOnLocal = countriesList[0].filter(country => country.flags.svg === countrySrc ? country : void (0));
    localStorage.setItem('countryDetail', JSON.stringify(defineCountryOnLocal[0]));
    goToDetailsPage();
}
function goBack() {
    window.location.href = './index.html'
}
getTheme()