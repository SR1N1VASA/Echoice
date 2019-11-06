const passport = require('passport');

module.exports = app => {
app.get('/auth/google', passport.authenticate('google', //checking the auth using google amd sending code
{
    scope: ['profile', 'email']
})
);

app.get('/auth/google/callback', passport.authenticate('google')); //checking the google with code given

app.get('/api/logout', (req,res) => {
 req.logout();
 res.send(req.user);
});

app.get('/api/current_user', (req,res) => {
    res.send(req.user);
})
};