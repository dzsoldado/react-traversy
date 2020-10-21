import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from "../../context";

export class Contacts extends Component {


  render() {
    return (
      <Consumer>
      {value => (
        <React.Fragment>
          {value.contacts.map(contact =>
            (<Contact key={contact.id} contact={contact} />)
          )}
        </React.Fragment>
      )}
      </Consumer>
    )
  }
}

export default Contacts
