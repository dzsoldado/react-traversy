import React, { Component } from 'react'


const Context = React.createContext();



const reducer = (state, action) =>{
  switch(action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact=>contact.id !== action.payload)
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact=>contact.id === action.payload.id ? contact=action.payload: contact)
      }
    default:
      return state 
  }
}
  

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      let fetchedContacts = json.map(user => {
        return {id: user.id, name: user.name, email: user.email, phone: user.phone  } })
      this.setState({contacts: fetchedContacts})
      })
  }

  render() {

    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;