import "./App.css";
import { Component } from "react";
// import { Route } from "react-router-dom";
import ListContacts from "./ListContacts.js";
import CreateContact from "./CreateContact";
import * as ContactsAPI from "./utils/ContactsAPIs";

class App extends Component {
  state = {
    screen: "list",
    contacts: [],
  };

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts });
    });
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id),
    }));

    ContactsAPI.remove(contact);
  };

  render() {
    return (
      <div className="app">
        {/* <Route
          exact
          path="/"
          render={() => (
            <ListContacts
              onDeleteContact={this.removeContact}
              contacts={this.state.contacts}
              onNavigate={() => {
                this.setState({ screen: "create" });
              }}
            />
          )}
        /> */}

        {this.state.screen === "list" && (
          <ListContacts
            onDeleteContact={this.removeContact}
            contacts={this.state.contacts}
            onNavigate={() => {
              this.setState({ screen: "create" });
            }}
          />
        )}


        {this.state.screen === "create" && <CreateContact />}

        {/* <Route path="create" Component = {CreateContact}/>   */}
      </div>
    );
  }
}

export default App;
