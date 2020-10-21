import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Consumer } from "../../context";


export default class Contact extends Component {
  
  state = {
    showContactInfo : false
  }

  toggleShow = (e)=>{
    this.setState({showContactInfo: !this.state.showContactInfo})
  }

  deleteContact = (id, dispatch)=>{

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
    .then(res=>{
      dispatch({type: "DELETE_CONTACT", payload: id})
    })
    .catch(err=>{
      console.log("error")
    })
  }

  
  render() {

    const {id, name, phone, email} = this.props.contact;

    return (

      <Consumer>
        {value => {
          const {dispatch} = value;
        return(

          <div className="card mt-3">
            <div className="card-body">
              <h3 className="card-title">
                {name} 
                <ion-icon 
                onClick={this.toggleShow} 
                name="chevron-down-outline" 
                style={{cursor: "pointer"}}
                />


                <ion-icon 
                  onClick={this.deleteContact.bind(this, id, dispatch)} 
                  name="close-outline" 
                  style={{cursor: "pointer", float: "right", color: "red"}}
                  />
                <Link to={`edit/${id}`}>
                  <ion-icon 
                    name="pencil-outline" 
                    style={{cursor: "pointer", float: "right", color: "green"}}
                  />
                </Link>
  
              </h3>

              {this.state.showContactInfo? (
              <ul className="list-group">
                <li className="card-subtitle list-group-item">Phone : {phone}</li>
                <li className="card-subtitle list-group-item">Email : {email}</li>
              </ul>
              ): null}
            </div>
          </div>
        )}}
      </Consumer>
    )
  }
}
