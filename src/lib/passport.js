const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../database');
const helpers = require('../lib/helpers');


passport.use('local.login-user', new LocalStrategy({ 
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done)=>{
     const result = await pool.query("SELECT * FROM users WHERE username = ?", [username]);
     console.log(result);
     if (result.length > 0) {
       const user = result[0];
       const validPassword = await helpers.matchPassword(password, user.password);
       if (validPassword){
         done(null, user, req.flash('success','Hola ' + user.username + ' espero que la pases bien'));
       }else {
         done(null, false, req.flash('failure', 'Contraseña incorrecta'));
       }
     }else {
       return done(null, false, req.flash('failure', 'Usuario incorrecto, intentelo de nuevo'));
     }
  }
));

passport.use('local.signup', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, username, password, done) => {
  const {confirme_password, edad, peso, altura, imc } = req.body;
  if(username.length > 4){
    if( password === confirme_password ){
      const nuevo_usuario = {
        username,
        password,
        edad,
        peso,
        altura,
        imc
      };
      nuevo_usuario.password = await helpers.encyrptPassword(password);
      nuevo_usuario.imc = (nuevo_usuario.peso / (nuevo_usuario.altura*nuevo_usuario.altura))
      const result = await pool.query('INSERT INTO users set ?',[nuevo_usuario]);
      nuevo_usuario.id = result.insertId;

       done(null, nuevo_usuario);
    }else{
      return done(null, false, req.flash('failure', 'ERROR: Las constraseñas no coninciden'));
    }
  }else{
    return done(null, false, req.flash('failure', 'ERROR: El nombre de usuario debe ser de más de cuatro caracteres'));
    
  }
}));

passport.serializeUser((usr, done) =>{
   done(null, usr.id);
});

passport.deserializeUser(async (id, done) => {
   const rows = await pool.query('SELECT * FROM users WHERE id =  ?',[id]);
   done(null, rows[0]);
});
