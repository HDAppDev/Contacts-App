import './App.css';
import { Component } from 'react';
import ListContacts from './ListContacts.js'


class App extends Component{
  state = {
    contacts: [
      {
        "id": "ajay",
        "name": "Ajay Sathe",
        "email": "ajay.sathe@awesome.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "niks",
        "name": "Nikhil Sathe",
        "email": "nikhil.sathe@awesome.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "vijay",
        "name": "Vijay Sathe",
        "email": "vijay.sathe@awesome.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      }
    ]
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }
  
  render() {
    return (
      <div>
        <ListContacts onDeleteContact = {this.removeContact} contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
