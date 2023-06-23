Description:
-> for clear look we have to keep index.js file always simple.

-> We use app from different file and export it to index.js file.

-> We use express Router for different route, and exported it to app.js file.
For simplicity we keep router in diffrent folder, because we can have so many
different route for different API, like: User, Admin etc.

-> We can use Vs code Extension "Thunder Client" for testing different api. post, put, delete etc.
we can only test get request from browsers.

->"res.satus()" to set status code for succesful server respose or failed server response. 
    100 - 199 -> These status codes indicate that the request was received and is being processed.
    200 - 299 -> These status codes indicate that the request was successfully processed.
    300 - 399 -> These status codes indicate that the client should take further action in order to complete the request.
    400 - 499 -> These status codes indicate that the client made an error in the request.
    500 - 599 -> These status codes indicate that the server encountered an error while processing the request.

-> Some common Http status code is:
        200 OK - The request was successful.
        304 Not Modified - Data from new request and previos is same, or not changed.
        400 Bad Request - The request was malformed or syntactically incorrect.
        401 Unauthorized - The client is not authorized to access the resource.
        403 Forbidden - The client is forbidden from accessing the resource.
        404 Not Found - The resource was not found.
        500 Internal Server Error - The server encountered an unexpected error while processing the request.
        503 Service Unavailable - The server is temporarily unavailable.

-> "res.send(data, encoding)" Sends data to the client. The data parameter is the data that will be sent to the client. The encoding parameter specifies the encoding of the data.

-> res.redirect("/path") method is used to redirect the client to a new URL. The method takes two arguments: the new URL and an optional status code. The default status code is 302, which indicates a temporary redirect.

-> "res.sendfile(__dirname+"/path of the file")" method is used to send a file to the client. The file can be a static file, such as an image or a JavaScript file, or it can be a dynamic file, such as a generated PDF file.

-> res.cookies('username', 'abid') method is used to set cookies. Cookies are small pieces of data that are stored on the client's computer. They can be used to track the user's session, remember their preferences, or store other information.