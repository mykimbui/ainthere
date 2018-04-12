# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.destroy_all
Picture.destroy_all

City.create(name: 'Amsterdam')
City.create(name: 'Antwerpen')
City.create(name: 'Brussels')
City.create(name: 'Leuven')
City.create(name: 'Rotterdam')
City.create(name: 'Seoul')
City.create(name: 'Hong Kong')
City.create(name: 'Taipei')
City.create(name: 'Tokyo')
City.create(name: 'Lisbon')
City.create(name: 'Aachen')
City.create(name: 'Berlin')
City.create(name: 'Saigon')
City.create(name: 'Miami')
City.create(name: 'Milan')
City.create(name: 'London')
City.create(name: 'Copenhagen')
City.create(name: 'Macau')
City.create(name: 'Osaka')

Picture.create(url: 'http://via.placeholder.com/300x550', city_id: 1)
Picture.create(url: 'http://via.placeholder.com/300x550', city_id: 1)
Picture.create(url: 'http://via.placeholder.com/300x550', city_id: 1)
Picture.create(url: 'http://via.placeholder.com/300x550', city_id: 1)
Picture.create(url: 'http://via.placeholder.com/300x550', city_id: 1)
Picture.create(url: 'http://via.placeholder.com/300x550', city_id: 1)
Picture.create(url: 'http://via.placeholder.com/300x550', city_id: 1)
Picture.create(url: 'http://via.placeholder.com/300x550', city_id: 1)
Picture.create(url: 'http://via.placeholder.com/300x550', city_id: 1)
Picture.create(url: 'http://via.placeholder.com/300x550', city_id: 1)
Picture.create(url: 'http://via.placeholder.com/300x550', city_id: 1)
Picture.create(url: 'http://via.placeholder.com/300x550', city_id: 1)
Picture.create(url: 'http://via.placeholder.com/300x550', city_id: 1)
