const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')



const emitter = new EventEmitter()

//console.log(message) -> Mostrar na tela a mensagem

emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
        if (err) throw err
    })
})

// Forma simples
// emitter.emit('log', 'olá mundo')

// Function
function log(message){
    emitter.emit('log', message)
}

// passar mensagem
//log ('Passar uma mensagem')
//log ('Passar uma mensagem2')
//log ('Passar uma mensagem3')

// Exportar function para outros arquivos
module.exports = log

