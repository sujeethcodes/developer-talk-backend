const handler = require("express-async-handler");
const { v4: uuid } = require("uuid");
const config = require("../config/config");
const utils = {};

utils.profileUpload = (folder = "", file = "", fileType = "IMAGE") => {
  return new Promise(async (resolve, reject) => {
    const s3 = new aws({
      accessKeyId: config.AWS_S3_ID,
      secretAccessKey: config.AWS_S3_SECRET_KEY,
    });
    const checkFile = uuid() + (fileType === "image" ? ".png" : "");

    const checkedFile = folder + "/" + checkFile;

    const params = {
      Bucket: config.AWS_S3_BUCKET_NAME,
      Key: checkedFile,
      Body: file,
      ContentType: fileType === "image" ? "image/png" : "",
    };

    s3.putObject(params, (error, data) => {
      if (error) {
        console.log(error, err.stack);
        reject("");
      } else {
        resolve(checkFile);
        console.log("IMAGE UPLOADED SUCESSFULLY!", data);
      }
    });
  });
};

module.exports = utils;
