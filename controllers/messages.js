const { request, response } = require("express")

const rootMessage = (req = request, res = response) => {
    res.res.status(404).json({msg:'mensajes'})
   } //End point 

   const hiMessage = (req = request, res = response) => {
    res.res.status(408).json({msg:'mensajes Hola mundo'})
   } //End point 

   const byeMessage = (req = request, res = response) => {
    res.res.status(409).json({msg:'mensajes Adiós mundo'})
   } //End point 

   const postMessage = (req = request, res = response) => {
    res.res.status(410).json({msg:'mensajes post'})
   } //End point 

   const putMessage = (req = request, res = response) => {
    res.res.status(414).json({msg:'mensajes put'})
   } //End point 

   const deleteMessage = (req = request, res = response) => {
    res.res.status(422).json({msg:'mensajes delete'})
   } //End point 

 




   module.exports = {rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage }

   