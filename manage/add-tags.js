require('dotenv').config({path:'./config/.env'});
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.add_tag('animal', ['kitten', 'giraffe'])
  .then(result => console.log(result))
  .catch(error => console.error(error));
