const BASE_URL = "http://localhost:3000/"

document.addEventListener("DOMContentLoaded", () => {
})

function fetchCountries(){
  fetch(`${BASE_URL}/countries`)
  .then(resp => resp.json())
  .then((json) => renderCountries(json))
}

function renderCountries(countries){
  

}
