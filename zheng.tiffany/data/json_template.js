// http://www.konbert.com/convert (search sqlify)



// Location Template

[
  '{{repeat(250)}}',
  {
    id: '{{index(1)}}',
    unyun_id: '{{integer(1,50)}}',
    
    lat: '{{floating(34.052361,34.069747)}}',
    lng: '{{floating(-118.309396,-118.290986)}}',

    price: '{{floating(1, 10, 2, "0.00")}}',
    quantity: '{{integer(1, 10)}}',
    unit_price: function() {
      return this.price / this.quantity;
    },

    location: '{{random("Galleria","H-Mart","California Market","Farmer\'s Market Vendor","Zion Market","Trader Joe\'s")}}',
    description: '{{lorem(3, "sentences")}}',

    photo: function(tags) {
      return './images/locations/' + this.location + '.jpg';
    },

    icon: './images/icons/map-pin-green.svg',
    
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd")}}'
  }
]

// Unyun Template

[
  '{{repeat(50)}}',
  {
    id: '{{index(1)}}',
    user_id: '{{integer(1,10)}}',
    category: '{{random("Fruits","Vegetables","Pantry")}}',
    type: function(tags) {
      var types = {
        "Fruits":["Grapes","Plums","Tangerines","Strawberries"],
        "Vegetables":["Green Onions","Broccoli","Tomatoes","Cauliflower"],
        "Pantry":["Garlic","Jasmine Rice","Eggs","Chicken Stock"]
      };
      var chosen_type = types[this.category];
      var chosen_index = tags.integer(0,chosen_type.length-1);
      return chosen_type[chosen_index];
    },
    img: function(tags) {
      return './images/unyun-photos/' + this.type + '.jpg';
      },
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd")}}'
  }
]

// User Template

[
  '{{repeat(10)}}',
  {
    id: '{{index(1)}}',
    name: '{{firstName()}} {{surname()}}',
    username: function(){
      return 'user' + this.id;
      },
    email: function(){
      return this.username + '@gmail.com';
      },
    password: 'md5(pass)',
    img: function(tags) {
      return './images/users/' + this.username + '.jpg';
      },
    phone: '+1 {{phone()}}',
    gender: '{{gender()}}',
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd")}}'
  }
]


// JSON Generator Template (https://www.json-generator.com/)

[
  '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    index: '{{index()}}',
    guid: '{{guid()}}',
    isActive: '{{bool()}}',
    balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
    picture: 'http://placehold.it/32x32',
    age: '{{integer(20, 40)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    about: '{{lorem(1, "paragraphs")}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    tags: [
      '{{repeat(7)}}',
      '{{lorem(1, "words")}}'
    ],
    friends: [
      '{{repeat(3)}}',
      {
        id: '{{index()}}',
        name: '{{firstName()}} {{surname()}}'
      }
    ],
    greeting: function (tags) {
      return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
    },
    favoriteFruit: function (tags) {
      var fruits = ['apple', 'banana', 'strawberry'];
      return fruits[tags.integer(0, fruits.length - 1)];
    }
  }
]