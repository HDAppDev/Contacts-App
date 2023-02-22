import './App.css';
import { Component } from 'react';
import ListContacts from './ListContacts.js'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPIs'


class App extends Component{
  state = {
    screen: 'list',
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
      <div className='app'>
        {this.state.screen === 'list' && (
          <ListContacts 
          onDeleteContact = {this.removeContact} 
          contacts={this.state.contacts}
          onNavigate = {() => {
            this.setState({ screen: 'create' })
          }}
        />
        )}
        {this.state.screen === 'create' && (
          <CreateContact />
        )}
        
      </div>
    )
  }
}

export default App;
