import multer from "multer";

const storage = multer.diskStorage({
  destination(req, res, callback){
    callback(null, "/temp");
  },

  filename(req, file, callback){
    callback(null, file.fieldname);
  }
});