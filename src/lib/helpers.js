const bcrypt = require('bcryptjs');
const {format} = require('timeago.js');
const helpers = {}
helpers.encyrptPassword = async (password) =>{
 const salt = await bcrypt.genSalt(10);
 const hash = await bcrypt.hash(password, salt);
 return hash;
};

helpers.matchPassword = async (password, savedPassword) =>{
     try {
       return await bcrypt.compare(password, savedPassword);

     } catch (e) {
       console.log(e);
     }
};

helpers.imc = (value, option)=>{
  if(value <=15){
    return 'Tu IMC es de '+value+' estás en el rango de delgadez muy severa, te recomendamos el paquete especial número 1';
  }else if (value > 15 && value<=15.9) {
      return 'Tu IMC es de '+value+' estás en el rango de delgadez severa, te recomendamos el paquete especial número 1';
  }else if (value >= 16 && value <=18.4) {
    return 'Tu IMC es de '+value+' estás en el rango de delgadez, te recomendamos el paquete especial número 1';
 }else if (value >= 18.5 && value <=24.9) {
   return 'Tu IMC es de '+value+' estás en el rango de un peso saludable, te recomendamos el paquete especial número 2';
 }else if (value >= 25 && value <=29.9) {
   return 'Tu IMC es de '+value+' estás en el rango de sobrepeso, te recomendamos el paquete especial número 3';
 }else{
   return 'Tu IMC es de '+value+' estás en el rango de obesidad, te recomendamos el paquete especial número 4';
 }
};

helpers.timeago= (timestamp)=>{
  return format(timestamp);
};
module.exports = helpers;
