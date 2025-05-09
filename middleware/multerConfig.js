const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const allowedFileTypes = ["image/png", "image/jpg", "image/jpeg"];
  if(!allowedFileTypes.includes(file.mimetype)){
    cb(new Error("File type is not supported")) // --> cb (error)
    return
  }
    cb(null, "./storage"); // --> cb (error, success)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

module.exports = {
  storage,
  multer,
};
