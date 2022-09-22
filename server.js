const express = require('express')
const messagesRouter = require('./routes/messages')

class server {
    constructor () {
        this.app = express()
        this.port = process.env.PORT

        this.paths = {
            message:"/api/v1/messages",

        }
        this.routes()
    }

    routes() {

        //this.app.get('/', (req, res) => {
            //res.send('Hola mundo')
         this.app.use(this.paths.message, messagesRouter)
        
        } //End point realiza una sola tarea
        
    

    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en el puerto', this.port);
        })
    }
}

module.exports = server 