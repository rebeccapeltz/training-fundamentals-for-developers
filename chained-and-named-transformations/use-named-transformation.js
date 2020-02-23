require('dotenv').config({path:'./config/.env'});
const cloudinary = require('cloudinary').v2;

const url = cloudinary.url('cute_animals/kitten', {
  secure: true,
  transformation: ['small_fill2']
});

console.log(url);