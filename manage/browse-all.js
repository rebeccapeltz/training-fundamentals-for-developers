require('dotenv').config({path:'./config/.env'});
const cloudinary = require('cloudinary').v2;

cloudinary.api.resources()
  .then(result => console.log(result))
  .catch(error => console.error(error));
