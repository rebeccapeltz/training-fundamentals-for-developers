require('dotenv').config({path:'./config/.env'});
const cloudinary = require('cloudinary').v2;

cloudinary.api.resources({
  max_results: '30'
})
  .then(result => console.log(result))
  .catch(error => console.error(error));
