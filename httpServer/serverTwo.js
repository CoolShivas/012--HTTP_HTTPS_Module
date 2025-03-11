const http = require('http');



const webServer = http.createServer((req, res) => {
    if(req.url === "/")
    {
        // // First, page created with forward slash url i.e., ("/").
        res.setHeader("Content-Type", "text/plain");
        // // This is written (res.setHeader("Content-Type", "text/plain");) for the server clearity;
        // // That this page contains the plain text;
        res.write("Welcome to the new Port address of 4000");
        // // First, page content is written above.
        res.end();
        // // First, page end now.
    }
    if(req.url === "/home")
    {
        // // Second, page created with forward slash about i.e., ("/home").
        res.setHeader("Content-Type", "text/html");
        // // This is written (res.setHeader("Content-Type", "text/html");) for the server clearity that it is having the HTML tags also;
        res.write("<h1> Welcome to the Home Page. </h1>");
        // // Second, page content is written above.
        res.end("")
        // // Second, page end now.
    }
    // // Therefore, if you added the new url like as I have added the contact page.
    // // So, on the server it is not going to be visible soon.
    // // We have to restart the server (i.e, PORT) again. If changes done.
    if (req.url === "/contact") 
    {
        res.setHeader("Content-Type", "text/html");
        res.write("<center> For any query. Feel free to contact us. </center>");
        res.end();
    }
});




const PORT = 4000;


webServer.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}`);
});



// // // Here, we are getting the Output on Terminal as :-
// // // Listening on Port 4000
// // // Therefore, now on any web-browser. Enter the url http://localhost:4000/
// // // http://localhost:4000/           => Welcome to the new Port address of 4000.
// // // http://localhost:4000/home       => Welcome to the Home Page.
// // // http://localhost:4000/contact  => For any query. Feel free to contact us.
// // // As well as, we are able to see the difference while inspect and go to the Elements section as we have mention the text whether it is plain or html tags.
