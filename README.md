
# Chatty app
This is a chatt app, and it has one page. 
- Users can open the page and chat with other users that have the page open.
- The number of online users is dispalyed on the top right side of the page.
- When the user types a text in text box and hits Enter, the message shows up on all the user's page.
- Text box gets cleared when the user hits Enter.
- User can change their name by typing the new name in the name box and hitting Enter key. 
- When a user changes their name, a message shows up on all the user's page saying that that particular user changed their name from the old name to the new name.


# Dependencies
app server:
* React
* React-dom
* sass-loader
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

socket server dependencies:
* express
* ws

# Running the app
This app has an app server that can be run by typing node "server.js" on command line inside "firstReact" foler. There is also a socket server that can be run by typing "node server.js" on command line inside "chatty_server" foler.

# ScreenShots
- !["The chatty app page"](https://github.com/hajinasiri/reactpractice/blob/master/docs/Screen%20Shot%202017-08-25%20at%208.58.30%20AM.png?raw=true)
