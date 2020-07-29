class Place {
  constructor(country_id, name, image, description) {
    this.name = name
    this.image = image
    this.description = description
    this.country_id = country_id
  }

renderPlace() {
  let placeWrapper = document.getElementById('swipe-wrap')

  placeWrapper.innerHTML +=
  `
  <div class="swiper-slide">
  <div class="card">
    <div class="sliderText" id="sliderText">
      <h3>${this.name}</h3>
    </div>
    <div class="content" id="img-content">
      <img src=${this.image}>
      <h3>${this.description}</h3>
    </div>
  </div>
  </div>
  `
  }

}
