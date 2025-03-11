const http = require("http");



const server = http.createServer((request, response) => {
    // // What is this http.createServer() ? 
    // // It is also known as Event Emitter.
    if(request.url === "/")
    {
        response.write("Formation of Web-Server using Node.js.");
        response.end();
    }
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});


// // Here, we are getting the Output on Terminal as :-
// // // Listening on Port 3000
// // // Therefore, now on any web-browser. Enter the url http://localhost:3000/
// // // We will get the output on the display as :- Formation of Web-Server using Node.js.
// // // And if you inspect and move to Elements section you will get the HTML structure and the body too.

