const express = require('express');
const dotenv = require ('./app/config/env/development')
const {app} = require ('./ap')
const http = require('http')
const { initSocket } = require('./app/helpers/socketIo');

const server = express()
server.use(app)
const ioserver = http.createServer(server)
initSocket(ioserver)


// run server
const port = dotenv.PORT || 5000
ioserver.listen(port, ()=>{
    console.log(`server is runing on prot ${port}`)
})



// const http = require('http')
// const server = http.createServer((req,res)=>{
//     console.log('new user join')
//     res.write('you send data to browser')
//     res.end()
// })


// server.listen(5001,()=>{
//     console.log('you are listening on 5001')
// })
