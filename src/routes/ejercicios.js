const express = require('express');
const router = express.Router();
const pool = require('../database');
const moment = require('moment');
const { isLoggedIn } = require('../lib/auth.js');
router.get('/rutinas/abdominales-principiante', isLoggedIn ,(req, res)=>{
  res.render("ejercicios/abdominales-principiante.hbs");
});
router.get('/rutinas/pecho-principiante', isLoggedIn ,(req, res)=>{
  res.render("ejercicios/pecho-principiante.hbs");
});
router.get('/rutinas/brazo-principiante', isLoggedIn ,(req, res)=>{
  res.render("ejercicios/brazo-principiante.hbs");
});
router.get('/rutinas/piernas-principiante', isLoggedIn , (req, res)=>{
  res.render("ejercicios/piernas-principiante.hbs");
});
router.get('/rutinas/espalda-hombros-principiante', isLoggedIn , (req, res)=>{
  res.render("ejercicios/espalda-hombros-principiante.hbs");
});
router.get('/rutinas/abdominales-intermedio', isLoggedIn , (req, res)=>{
  res.render("ejercicios/abdominales-intermedio.hbs");
});
router.get('/rutinas/pecho-intermedio', isLoggedIn , (req, res)=>{
  res.render("ejercicios/pecho-intermedio.hbs");
});
router.get('/rutinas/brazo-intermedio', isLoggedIn , (req, res)=>{
  res.render("ejercicios/brazo-intermedio.hbs");
});
router.get('/rutinas/piernas-intermedio', isLoggedIn , (req, res)=>{
  res.render("ejercicios/piernas-intermedio.hbs");
});
router.get('/rutinas/espalda-hombros-intermedio', isLoggedIn , (req, res)=>{
  res.render("ejercicios/espalda-hombros-intermedio.hbs");
});
router.get('/rutinas/abdominales-avanzado', isLoggedIn , (req, res)=>{
  res.render("ejercicios/abdominales-avanzado.hbs");
});
router.get('/rutinas/pecho-avanzado', isLoggedIn ,(req, res)=>{
  res.render("ejercicios/pecho-avanzado.hbs");
});
router.get('/rutinas/brazo-avanzado', isLoggedIn ,(req, res)=>{
  res.render("ejercicios/brazo-avanzado.hbs");
});
router.get('/rutinas/piernas-avanzado', isLoggedIn ,(req, res)=>{
  res.render("ejercicios/piernas-avanzado.hbs");
});
router.get('/rutinas/espalda-hombros-avanzado', isLoggedIn ,(req, res)=>{
  res.render("ejercicios/espalda-hombros-avanzado.hbs");
});

module.exports = router;
