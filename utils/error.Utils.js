const chalk = require("chalk");

const helperUtils = require("./helper.utils");

const utils = {};

utils.validateBody = (schema) => (req, res, next) => {
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  };
  const { error, value } = schema.validate(req.body, options);
  if (error) {
    console.log(chalk.yellow(JSON.stringify(req.body, null, 2)));
    console.log(
      JSON.stringify(
        error.details.map((each) => each.message),
        null,
        2
      )
    );

    res.status(422).json({
      code: 422,
      message: error.details.map((each) => each.message),
    });
  } else {
    req.body = value;
    next();
  }
};

utils.handlerError = async (err, req, res) => {
  // Draw Line for Serious Error
  if (err.message)
    console.log(chalk.redBright("-".repeat(process.stdout.columns)));
  // If User Info Available
  if (err) {
    if (req?.user?.userId) console.log(chalk.cyan(req.user?.userId));
  }
  // Console Error
  if (err.message) {
    if (Object.keys(req.body).length > 0)
      console.log(JSON.stringify(req.body, null, 2));
    console.log(chalk.redBright(err.message));
    console.log(chalk.redBright(err.stack) + "\t" + chalk.redBright(req.path));
    helperUtils.errorLogging({
      url: req.baseUrl + req.path,
      body: req.body,
      message: JSON.stringify({
        stack: err.stack,
        message: err.message,
      }),
      userId: req?.user?.userId,
    });
    res.status(500).json({ statusCode: 500, message: err.message });
  } else {
    console.log(chalk.yellow(JSON.stringify(req?.body, null, 4)));
    console.log(
      chalk.yellow(err.includes("|") ? err.split("|")[1] : err) +
        "\t" +
        chalk.yellow(req.path)
    );
    helperUtils.clientErrorLogging({
      url: req.baseUrl + req.path,
      body: req.body,
      message: err.includes("|") ? err.split("|")[1] : err,
      userId: req?.user?.userId,
    });
    res.status(err.includes("|") ? parseInt(err.split("|")[0]) : 500).json({
      statusCode: err.includes("|") ? parseInt(err.split("|")[0]) : 500,
      message: err.includes("|") ? err.split("|")[1] : err,
    });
  }
};

module.exports = utils;
