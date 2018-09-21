const express = require('express');
const passport = require('passport');
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const multer = require('multer');
const upload = multer({ dest: './public/profile_images/' }); 


router.get('/post/new', ensureLoggedIn('/login'), (req, res, next) => {
  res.render('post/newpost')
})

router.post('/post/new', [ensureLoggedIn('/login'), upload.single('photo')], passport.authenticate('local-post', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

module.exports = router;