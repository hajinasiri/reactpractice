// server.js

const express = require('express');
const wsLib = require('ws');
const SocketServer = wsLib.Server;

const http =require('http');
// const server=http.createServer(express);

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({server});


 wss.broadcast = function broadcast(data) {

      wss.clients.forEach(function each(client) {
         if (client.readyState === wsLib.OPEN) {
          client.send(data);

         }
      });
  };

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
var count = 0;
wss.on('connection', (ws) => {
  console.log('Client connected');
  count = count +1;
  var countmass = {type:"count", count:count};
  tempcount = JSON.stringify(countmass);
  wss.broadcast(tempcount);
  ws.on('message',(str)=>{

    wss.broadcast(str);
  });


  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected');
    count = count -1;
  });

});

