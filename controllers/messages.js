const { request, response } = require("express")

const rootMessage = (req = request, res = response) => {
    const {nombre,apellido_paterno} = req.query
   // console.log(nombre)
   if (!nombre){
    res.status(400).json({
        msg:"Falta indicar el nombre"
})
return
   }
   if (!apellido_paterno){
    res.status(400).json({
        msg:"Falta indicar el apellido paterno"

    })
    return
   }
    res.status(200).json({msg:'mi nombre es' + nombre + '' + apellido_paterno})
   } //End point 

   const hiMessage = (req = request, res = response) => {
    res.status(408).json({msg:'mensajes Hola mundo'})
   } //End point 

   const byeMessage = (req = request, res = response) => {
    res.status(409).json({msg:'mensajes Adiós mundo'})
   } //End point 

   const postMessage = (req = request, res = response) => {
    res.status(410).json({msg:'mensajes post'})
   } //End point 

   const putMessage = (req = request, res = response) => {
    res.status(414).json({msg:'mensajes put'})
   } //End point 

   const deleteMessage = (req = request, res = response) => {
    res.status(422).json({msg:'mensajes delete'})
   } //End point 

 




   module.exports = {rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage }

   