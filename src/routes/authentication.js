//Rutas de autenticación de usuarios: login, signup y logout
const express = require('express');
const router = express.Router();
const pool = require('../database');
const passport = require('passport');
const {isNotLoggedIn} = require('../lib/auth');


router.get('/login', isNotLoggedIn, (req, res) =>{
  res.render('auth/login.hbs');
});

router.post('/login', isNotLoggedIn ,(req, res, next)=>{
  passport.authenticate("local.login-user", {
      successRedirect: "/profile",
      failureRedirect: "/login",
      failureFlash: true,
    })(req, res, next);
});

router.get('/signup', isNotLoggedIn, (req, res)=>{
  res.render('auth/signup.hbs');
});

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/login',
  failureRedirect: '/signup',
  failureFlash: true
}));
router.get('/logout', (req, res)=>{
  req.logOut();
  res.redirect('/');
});
module.exports = router;
