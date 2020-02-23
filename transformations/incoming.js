require('dotenv').config({path:'./config/.env'});
const cloudinary = require('cloudinary').v2;

cloudinary.api.create_upload_preset({
  name: 'training_incoming_example',
  unsigned: false,
  transformation: {
      width: 400,
      height: 300,
      crop: 'fill',
      gravity: 'face'
  }
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));
