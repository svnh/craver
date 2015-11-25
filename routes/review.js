module.exports = function(app) {
  app.get('/review/create', function(req, res, next) {
    res.send('create')
  });

  app.get('/review/read', function(req, res, next) {
    res.send('read')
  });

  app.get('/review/update', function(req, res, next) {
    res.send('update');
  });

  app.get('/review/delete', function(req, res, next) {
    res.send('delete');
  });
};
