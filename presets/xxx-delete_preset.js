require('dotenv').config({path:'./config/.env'});
const cloudinary = require('cloudinary').v2;

cloudinary.api.delete_upload_preset('training_preset')
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));