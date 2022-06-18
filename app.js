const http= require("http");

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Welcome to our home page")
    }
    
    if(req.url === '/about'){
        res.end('this is about page')
    }
    res.end(
        `<h1>Oops!</h1>
        <p>page not found</p>
        <a href="/">home</a> `
        )
    
})

server.listen(5000)