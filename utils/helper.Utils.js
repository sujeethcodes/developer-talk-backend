const sharp = require("sharp");

const utils = {};

utils.getRandomUserId = () => {
  return Math.floor(Math.random() * 100000000);
};

utils.compressImage = async () => {
  const result = await sharp(buffer)
    .resize({
      width: width,
    })
    .jpeg({
      progressive: true,
    })
    .toBuffer();
  return result;
};
module.exports = utils;
