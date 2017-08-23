import React, {Component} from 'react';
import MessageList from './MessageList.jsx'
import ChatBar from './ChatBar.jsx'
import NavBar from './NavBar.jsx'
const uuid = require('uuid/v1');






class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?",
          id:"1"
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
          id: "2"
        }
      ]
    };
    this.updateme = this.updateme.bind(this);
    this.updatename = this.updatename.bind(this);
  }

updateme (text,id,username) {
  var new_obj = [{username: username, content:text, id:uuid()}];
  const mymass = this.state.messages.concat(new_obj);

    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: mymass})
}
updatename (name) {

  this.setState({
    currentUser: {
      name: name
    }
  });
}


componentDidMount() {
  console.log("componentDidMount <App />");
  setTimeout(() => {
    console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    const messages = this.state.messages.concat(newMessage);

    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages})
  }, 3000);
}


  render() {
    return (
        <div>
            <NavBar/>
            <MessageList Messages={this.state.messages}/>
            <ChatBar currentUser={this.state.currentUser} updatename={this.updatename} updateme={this.updateme} />
        </div>

  );
  }
}
export default App;