require('dotenv').config({path:'./config/.env'});
const cloudinary = require('cloudinary').v2;

cloudinary.api.restore(['kitten'])
.then(restoreResult => console.log(restoreResult))
.catch(error => console.error(error));
