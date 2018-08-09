const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      // use strategy called 'google' defined within GoogleStrategy
      scope: ['profile', 'email'] // specifies what info you want to access
    })
  );

  // This route will have the code and exchange it for user profile
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    // res.send(req.session);
    res.send(req.user);
  });
};
