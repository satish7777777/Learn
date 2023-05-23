import http from "http";
//const vik = require('./features');
//const toi = require('./features');
import love from './features.js';
import { sat,twi } from "./features.js";

console.log(sat);
console.log(twi);
console.log(love);

const server = http.createServer((req, res)=>{
    if(req.url==="/about"){
        res.end("<h1>About</h1>");
    }
    else if(req.url==="/contact"){
        res.end("<h1>Contact</h1>");
    }
    else if(req.url==="/"){
        res.end("<h1>Home</h1>");
    }
    else{
        res.end("<h1>Page not found</h1>");
    }   
});

server.listen(8000, ()=>{
    console.log("Server is created");
    console.log("Server is started");
   
})