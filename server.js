const http = require('http')
const port = 3000

const server = http.createServer(function(req, res) {
    res.write('Hello world')
    res.end()
})

// test('justin')

server.listen(port, function(error){
    if (error) {
        console.log('something went wrong', error)
    } else {
        console.log('server is listing on port', + port)
    } 
})