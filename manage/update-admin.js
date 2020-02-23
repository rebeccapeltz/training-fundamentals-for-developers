require('dotenv').config({path:'./config/.env'});
const cloudinary = require('cloudinary').v2;

cloudinary.api.update("kitten", {
    tags: "baby"
  })
  .then(updateResult => console.log(updateResult))
  .catch(error => console.error(error));
