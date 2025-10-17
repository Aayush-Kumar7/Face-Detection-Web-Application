const express = require('express');
const router = express.Router();
const upload = require('../middleware/ImageUpload');
const {uploadImage, listImages, deleteImage} = require('../controller/Imagecontroller');

router.post('/upload', upload.single('file'), uploadImage);

router.get('/images', listImages);

router.delete('/:id', deleteImage);

module.exports = router;