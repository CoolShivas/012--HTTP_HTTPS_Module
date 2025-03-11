/***
 * 
 * 
 * * * * HTTP Module  :-
 * 
 * 
 * 
 *      The http module in Node.js allows developers to create an HTTP 
        server and handle client requests and server responses. It 
        provides methods and properties to work with HTTP requests and 
        responses, enabling the creation of REST APIs, web pages, and 
        other networked applications.


        A web server is software or hardware that serves web content 
        (HTML, CSS, JavaScript, etc.) to clients (usually browsers) over the 
        internet or an intranet. It uses protocols like HTTP/HTTPS to 
        handle requests and responses
       
///////----------------------------------------------------------------------------------------



 * 
        Step 1: Importing the http Module :-
        • The http module is built into Node.js. Use require('http') to import it into your script.

        Step 2: Using http.createServer() :-
        • The createServer method initializes an HTTP server.
        • It takes a callback function as an argument with two parameters:
        • req: the incoming request object.
        • res: the outgoing response object.

        Step 3: Handling Requests :-
        • The req.url property provides the path requested by the client.
        • Based on req.url, send different responses using res.end().
        
        Step 4: Starting the Server :-
        • Use the listen() method to specify the port the server will run on.
        • Optionally, pass a callback to run code when the server starts (e.g., console.log()).

 * 
 * 
 * 
 * 
 */



        