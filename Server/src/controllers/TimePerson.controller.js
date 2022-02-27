const axios = require('axios');
const { Persona} = require('../db')

const CreateTime = async (req, res) =>{
  const { name, stepTime }= req.body;
  
  const timeMoment = await Persona.create({
    name, 
    stepTime})
  timeMoment.save()

res.send('se ha registrado exitosamente')
}





module.exports = { CreateTime }