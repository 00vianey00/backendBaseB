const { request, response } = require("express")

const rootMessage = (req = request, res = response) => {
    res.json({msg:'mensajes'})
   } //End point 

   const hiMessage = (req = request, res = response) => {
    res.json({msg:'mensajes Hola mundo'})
   } //End point 

   const byeMessage = (req = request, res = response) => {
    res.json({msg:'mensajes Adiós mundo'})
   } //End point 

   const postMessage = (req = request, res = response) => {
    res.json({msg:'mensajes post'})
   } //End point 

   const putMessage = (req = request, res = response) => {
    res.json({msg:'mensajes put'})
   } //End point 

   const deleteMessage = (req = request, res = response) => {
    res.json({msg:'mensajes delete'})
   } //End point 

 




   module.exports = {rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage }

   