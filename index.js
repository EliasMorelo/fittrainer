const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const passport = require('passport');

const {database} = require('./src/keys');

//Initializations
const app = express();
require('./src/lib/passport');

//Setings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, './src/views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./src/lib/helpers')
}));
app.set('views engine', '.hbs');


//Public files
app.use(express.static(path.join(__dirname, './src/public')));

//Middlewares
app.use(session({
  secret: 'fittrainersession',
  resave: false,
  saveUnitialized: false,
  store: new MySQLStore(database)
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());


//Global variables
app.use((req, res, next) =>{
  app.locals.success = req.flash('success');
  app.locals.failure = req.flash('failure');
  app.locals.user = req.user;
  next();
});


//Routes
app.use(require('./src/routes/routes'));
app.use(require('./src/routes/authentication'));
app.use(require('./src/routes/ejercicios'));

//Port
app.listen(app.get('port'), () =>{
  console.log('Servidor escuchando en el puerto', app.get('port'));
});
