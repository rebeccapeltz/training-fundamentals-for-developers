require('dotenv').config({path:'./config/.env'});
const cloudinary = require('cloudinary').v2;

cloudinary.api.delete_resources(['kitten', 'giraffe'])
  .then(result => console.log(result))
  .catch(error => console.error(error));
