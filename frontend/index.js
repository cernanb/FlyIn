const BASE_URL = "http://localhost:3000/"

document.addEventListener("DOMContentLoaded", () => {
  fetchCountries()
})

function fetchCountries(){
  fetch(`${BASE_URL}/countries`)
  .then(resp => resp.json())
  .then(countries => {
    for (const country of countries){
      let cntry = new Country(country.id, country.name, country.image)
      cntry.renderCountry()
    }
  })
}

// function renderCountries(countries){
//
//
// }
