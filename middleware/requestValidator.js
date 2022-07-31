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
  const requestBodyFields = [
    'twitterId',
    'name',
    'username',
  ];
  const invalidParameters = [];
  for (let paramameter in req.body){
    if (!requestBodyFields.includes(paramameter)) invalidParameters.push(paramameter);
  }
  if (invalidParameters.length) 
    return res.status(400).send({
      status: '400',
      error: 'Bad Request',
      message: `Invalid Body Parameters ${invalidParameters}correct parameters "${requestBodyFields}"`,
    })
  next();
};

module.exports = {
  requestValidator,
  requestBodyValidator,
};
