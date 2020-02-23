require('dotenv').config({path:'./config/.env'});
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.explicit('kitten', {
    type: 'upload',
    tags: 'baby'
  })
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error));
