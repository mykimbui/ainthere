
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
City.create(name: 'HongKong', flag: '🇭🇰')
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
City.create(name: 'Krakow', flag: '🇵🇱')


Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 1)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 2)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 3)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 4)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 5)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 6)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 7)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 8)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 9)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 10)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 11)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 12)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 13)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 14)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 15)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 16)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 17)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 18)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 19)
Picture.create(url: 'http://via.placeholder.com/350x550', city_id: 20)

