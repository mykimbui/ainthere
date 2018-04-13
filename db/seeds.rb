# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.destroy_all
Picture.destroy_all

City.create(name: 'Amsterdam', flag: '🇳🇱')
City.create(name: 'Antwerpen', flag: '🇧🇪')
City.create(name: 'Brussels', flag: '🇧🇪')
City.create(name: 'Leuven', flag: '🇧🇪')
City.create(name: 'Rotterdam', flag: '🇳🇱')
City.create(name: 'Seoul', flag: '🇰🇷')
City.create(name: 'Hong Kong', flag: '🇭🇰')
City.create(name: 'Taipei', flag: '🇹🇼')
City.create(name: 'Tokyo', flag: '🇯🇵')
City.create(name: 'Lisbon', flag: '🇵🇹')
City.create(name: 'Aachen', flag: '🇩🇪')
City.create(name: 'Berlin', flag: '🇩🇪')
City.create(name: 'Saigon', flag: '🇻🇳')
City.create(name: 'Miami', flag: '🇺🇸')
City.create(name: 'Milan', flag: '🇮🇹')
City.create(name: 'London', flag: '🇬🇧')
City.create(name: 'Copenhagen', flag: '🇩🇰')
City.create(name: 'Macao', flag: '🇲🇴')
City.create(name: 'Osaka', flag: '🇯🇵')

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
