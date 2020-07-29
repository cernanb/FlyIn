# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Country.create(name: "India", image: "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2015/08/Victoria-Memorial-during-Sunset-in-Kolkata.jpg")
Country.create(name: "Brazil", image: "https://www.internationaltaxreview.com/Media/images/international-tax-review/anjana-haines/july-2019/rio-de-janeiro-630%20x%20570.jpg")


Place.create(country_id: 32, name: "Vrindavan", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thegrandindianroute.com%2Fdestinations%2Futtar-pradesh%2Fvrindavan%2F&psig=AOvVaw2hiLydk4V-kCyuBgPQionU&ust=1596107423595000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCz-dOp8uoCFQAAAAAdAAAAABAD", description: "This is the spiritual world on Earth! A truly devotional place to visit!")
