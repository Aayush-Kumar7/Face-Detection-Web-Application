
const multer =  require("multer");
const path = require('path');
const fs = require("fs");

const uploadPath = path.join(process.cwd(), "public");
if(!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath,{recursive: true});

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, uploadPath);
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now()+"_" +path.extname(file.originalname));
    }
});
const fileFilter = (req, file,cb) =>{
    const allowedTypes = /jpeg|jpg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if(extname && mimetype) cb(null, true);
    else cb('Error:Image only!');
};
const upload = multer({
    storage, fileFilter, limits: {fileSize: 5* 1024 * 1024}
});

module.exports = upload;