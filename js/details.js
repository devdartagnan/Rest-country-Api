const sectionCountry = document.querySelector('.country-section')

function setDetails() {
    let localCountry = JSON.parse(localStorage.getItem('countryDetail'))
    setCountrySection(localCountry)
}

function setCountrySection(country) {
    let keyNativeName = Object.keys(country.name.nativeName).map(e => e)
    let firstKey = keyNativeName[0]

    let borders = country.borders ? country.borders.map(e => `<button class="btn-borders">${e}</button>`) : 'None'
    let bordersEdited = borders.toString().replaceAll(',', '')

    sectionCountry.innerHTML = `<figure class="country-set">
    <img class="country-img" src= "${country.flags.svg}" alt= "country flag of ${country.name.common}" onclick="goToDetailsPage()">
    <div class="country-details">
        <div class="country-info" >
            <h2><b class="title">${country.name.common}</b></h2>
            <div class="set-info">
                <div  class="country-sub-info">
                    <p><b class="bold">Native name:</b> ${country.name.nativeName[firstKey].official ? country.name.nativeName[firstKey].official : country.name.nativeName[keyNativeName].official} </p >
                    <p><b class="bold">Population:</b> ${country.population}</p>
                    <p><b class="bold">Region:</b> ${country.region}</p>
                    <p><b class="bold">Sub-Region:</b> ${country.subregion}</p>
                </div> 
                <div  class="country-sub-info"> 
                    <p><b class="bold">Capital:</b> ${country.capital}</p>
                    <p><b class="bold">Top Level Domain:</b> ${country.tld.map(e => e)}</p>
                    <p><b class="bold">Currencies:</b> ${country.currencies ? Object.keys(country.currencies).map(e => e) : 'None'}</p>
                </div>
            </div>
        </div >
        <div class="country-borders">
            <p><b>Border Countries:</b> ${bordersEdited}</p>
        </div>
    </div >
    </figure > `
}

setDetails()