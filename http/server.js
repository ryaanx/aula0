const { read } = require('fs')
const http  = require ('http')
const fs = require('fs')
const path = require('path')


http.createServer((req, res)=>{

const file= req.url === '/' ? 'index.html' : req.url
const filePath = path.join(__dirname, 'public',file)

const allowedFileTypes = ['.html', '.css', '.js']


//console.log(file)
//res.end('Chegueiss')
// res.write()
//res.end()
//console.log(req)
//return

//   if(req.url==='/'){
fs.readFile(
    filePath,
    (err, content)=>{
        if (err) throw err

        res.end(content)
    }
)
//    }
//if(req.url==='/contato')
//    return res.end('<h1>Contato</h1>')    
}).listen(5000, ()=>console.log('Server está Online'))