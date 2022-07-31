const requestValidator = (req, res, next) => {
const regex = /^[a-zA-Z0-9]+$/

if (!regex.test(req.params.username))
    return res.status(400).send({
      status: '400',
      error: 'Bad Request',
      message: 'Invalid username',
    });
  next();
};

const requestBodyValidator = (req, res ,next) => {
  
  next();
};

module.exports = {
  requestValidator,
  requestBodyValidator,
};
