const BASE_URL = 'http://localhost:3000/';

document.addEventListener('DOMContentLoaded', () => {
  fetchCountries();
  addCountry();
  // chosenCountry()
});

function fetchCountries() {
  fetch(`${BASE_URL}/countries`)
    .then((resp) => resp.json())
    .then((countries) => {
      for (const country of countries) {
        let cntry = new Country(
          country.id,
          country.name,
          country.get_image_url
        );
        cntry.renderCountry();
      }
    });
}

function addCountry() {
  let form = document.getElementById('country-form');

  form.innerHTML += `
  <form class="form-section" id="country-form" action="index.html" method="post">
   <input type="text" id="c-name" name="name" placeholder="Country">
   <input type="file" id="c-image" name="image" accept="image/*">
   <input type="submit">
  </form>
  `;
  form.addEventListener('submit', addCountrySubmit);
}

function addCountrySubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  fetch(`${BASE_URL}/countries`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: formData,
  })
    .then((resp) => resp.json())
    .then((country) => {
      let cntry = new Country(country.id, country.name, country.get_image_url);
      cntry.renderCountry();
    });
}

// function chooseCountry() {
//   let countryCard = document.getElementById('swipe-wrap')
//   countryCard.addEventListener('click', chosenCountry)
// }
