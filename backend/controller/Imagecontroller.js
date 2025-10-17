const Image = require('../models/Image');
const path = require('path');

const uploadImage = async (req,res) =>{
    try{
        if(!req.file){
            return res.status(400).json({
                message: 'No file uploaded'
            });
            
        }
        const file = req.file;
        const image = new Image({
            filename: file.filename,
            originalname:file.originalname,
            mimetype: file.mimetype
        });

        await image.save();
        res.status(201).json({
            success: true,
            message:'Image uploaded successfully',
            image:{
                id:image._id,
                filename: image.filename,
                url:`/public/${image.filename}`,
            }
        });

    }catch(err){
        console.error(err);
        res.status(500).json({message:'Server Error', error: err.message});
    }
};


const listImages = async (req,res) =>{
    try{
     const images = await Image.find().sort({ createdAt: -1 });
      res.json(images)
    }catch(err){
        console.error(err);
        res.status(500).json({
            message:'Server Error'
        });
    }
};


const deleteImage = async (req,res) =>{
    try{
        const{id} = req.params;
        const image = await Image.findById(id);
        if(!image)
            return res.status(404).json({message:'Not found'});

        const filePath = path.join(process.cwd(), 'public', image.filename);
        try{
            fstat.unlinksync(filePath);
        }catch(e){
        
        }
        await image.deleteOne();
        res.json({message:'Deleted'});
    }catch(err){
        console.error(err);
        res.status(500).json({message:'Server Error'});
    }
};

module.exports = {uploadImage, listImages, deleteImage}