import './App.css';
import { Component } from 'react';
import ListContacts from './ListContacts.js'
import * as ContactsAPI from './utils/ContactsAPIs'


class App extends Component{
  state = {
    contacts: [
    ]
  }

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) =>{
      this.setState({ contacts })
    })
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact)
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
