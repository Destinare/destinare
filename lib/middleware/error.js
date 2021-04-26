// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  let status = err.status || 500;

  res.status(status);

  console.log(err);

  res.send({
    status,
    message:
      'No results found. Please make sure the city name is spelled correctly and the state was entered as a two digit state code.',
  });
};
