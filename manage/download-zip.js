require('dotenv').config({path:'./config/.env'});
const cloudinary = require('cloudinary').v2;

const url = cloudinary.utils.download_zip_url({
  public_ids: ['kitten','giraffe'],
  resource_type: 'image'
});

console.log(url);