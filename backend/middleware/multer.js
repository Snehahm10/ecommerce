// import multer from 'multer';

// const storage = multer.diskStorage(

//     {
       
//         filename: function (req, file, callback) {
//             callback(null, file.originalname);
//         }
//     }
// );

// const upload=multer({storage});


// export default upload;

import multer from 'multer';
import path from 'path';

// Define storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // This is where uploaded files will be saved
        cb(null, 'uploads/'); // Make sure this folder exists in your project root
    },
    filename: function (req, file, cb) {
        // Add timestamp to avoid duplicate names
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Create multer upload instance
const upload = multer({ storage });

export default upload;
