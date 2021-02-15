const os = require('os')
// console.log(os.platform())

setInterval(() =>{

const {freemem, totalmem} = os

// console.log(`${parseInt(freemem() / 1024 / 1024)} MB disponíveis de` , `${parseInt(totalmem()/1024/1024)} MB`)

const total = parseInt(totalmem() / 1024 / 1024)
const mem = parseInt(freemem() / 1024 / 1024)

const percents = parseInt(100-((mem / total) * 100))

// console.log(mem, total, percents)

const stats = {
    free: `${mem} MB`,
    total:`${total} MB`,
    usage:`${percents} %`
}
console.clear()
console.log("=== PC Stats ===")
console.table(stats)
//console.log(stats)
},1000)