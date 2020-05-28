//Instancias
const express = require('express');
const router = express.Router();
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth.js');
const { isNotLoggedIn } = require('../lib/auth.js');
const moment = require('moment');
const helpers = require('../lib/helpers');
//Rutas
router.get('/', isNotLoggedIn, (req, res)=>{
  res.render('../../index.hbs');
});


router.get('/rutinas', isLoggedIn , (req, res)=>{
  res.render('layouts/rutinas.hbs');
});


router.get('/perfil', isLoggedIn ,(req, res)=>{
  res.render('layouts/perfil.hbs');
});


router.get('/perfil/edit/:id', isLoggedIn, (req, res)=>{
  const {id} = req.params;
  console.log(id);
});

router.post('/perfil/edit/:id', isLoggedIn, async (req, res)=>{
  const {id} = req.params;
  const {username, edad, peso, altura, imc } = req.body;
  console.log();
  const nuevo_usuario = {
    username,
    edad,
    peso,
    altura,
    imc
  };
  nuevo_usuario.imc = (nuevo_usuario.peso / (nuevo_usuario.altura*nuevo_usuario.altura))
   await pool.query('UPDATE users set username = ?  WHERE id = ?',[nuevo_usuario.username,id]);
   await pool.query('UPDATE users set edad = ?  WHERE id = ?',[nuevo_usuario.edad, id]);
   await pool.query('UPDATE users set peso = ? WHERE id = ?',[nuevo_usuario.peso,id]);
   await pool.query('UPDATE users set altura = ? WHERE id = ?',[nuevo_usuario.altura,id]);
   await pool.query('UPDATE users set imc = ? WHERE id = ?',[nuevo_usuario.imc,id]);
  res.redirect('/perfil');
});

router.get('/rutina-dieta-especial', isLoggedIn , async (req, res)=>{
  res.render('layouts/rutina-dieta-especial.hbs');
});


router.get('/informe', isLoggedIn , async (req, res)=>{
  const calorias = await pool.query('SELECT * FROM seguimiento WHERE id_usuario = ?', req.user.id);
  res.render('layouts/informe.hbs', {calorias});
});


router.post('/informe', async (req, res)=> {
  const {tiempo } = req.body;
  const tiempoP = tiempo*0.000277778;
  const calorias_perdidas = (3.8*req.user.peso)*tiempoP;
  const peso_perdido= calorias_perdidas / 7000;
  const id_usuario = req.user.id;
  const fecha = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
  const nuevo_seguimiento = {
  calorias_perdidas: calorias_perdidas,
  peso_perdido: peso_perdido,
  id_usuario: id_usuario,
  fecha: fecha
  };
  const result = await pool.query('INSERT INTO seguimiento set ?',[nuevo_seguimiento]);
  res.redirect('back');
});


router.get('/rutina-dieta-especial/paquete-especial-uno', isLoggedIn , (req, res)=>{
  res.render('layouts/paquete-uno.hbs');
});


router.get('/rutina-dieta-especial/paquete-especial-dos', isLoggedIn , (req, res)=>{
  res.render('layouts/paquete-dos.hbs');
});


router.get('/rutina-dieta-especial/paquete-especial-tres', isLoggedIn , (req, res)=>{
  res.render('layouts/paquete-tres.hbs');
});


router.get('/rutina-dieta-especial/paquete-especial-cuatro', isLoggedIn , (req, res)=>{
  res.render('layouts/paquete-cuatro.hbs');
});


module.exports = router;
