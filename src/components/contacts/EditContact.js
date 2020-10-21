import React, { Component } from 'react';
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup"

export class EditContact extends Component {

  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  }

  // GET CLIENT DATA
  componentDidMount(){
    const id = this.props.match.params.id;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(data=>data.json())
    .then(json=>{
      this.setState({
        name: json.name,
        email: json.email,
        phone: json.phone,
        errors: {}
      });
    })
  }

  onChange = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (dispatch, e)=>{
    e.preventDefault();
    const { name, email, phone } = this.state;

    // ERROR CHECKING
    if(name.length < 4 ){
      this.setState({errors: {name: "Name must contain at least 4 characters"}})
    }else{
      if(email.length === 0) {
        this.setState({errors: {email: "Email is required"}})
      }else{
  
        const updContact = {
          name,
          email,
          phone,
        }
  
        const id = this.props.match.params.id;
        // UPDATE CONTACT
        const updateData = async()=>{
          try{
            let data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
              method: 'PUT',
              body: JSON.stringify(updContact) ,
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
            })
  
            let json = await data.json();
  
            dispatch({type: "EDIT_CONTACT", payload: json});
      
            this.setState({
              name: "",
              email: "",
              phone: "",
              errors: {}
            });
            this.props.history.push("/");
          }catch(err){
            console.log(err)
          }
        }

        updateData();
      }
    }
  }


  render() {
    const { name, email, phone, errors} = this.state;
    return (
      <Consumer>
        {value=>(
          <div className="card mb-3">
            <div className="card-header">Edit Contact</div>
            <div className="card-body">
              <form action="" onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                <TextInputGroup 
                  label = "Name"
                  name="name"
                  value={name}
                  placeholder="Name"
                  type="text"
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextInputGroup 
                  label = "Phone"
                  name="phone"
                  value={phone}
                  placeholder="0555 55 55 55"
                  type="text"
                  onChange={this.onChange}
                  error={errors.phone}
                />

                <TextInputGroup 
                  label = "Email"
                  name="email"
                  value={email}
                  placeholder="example@example.com"
                  type="email"
                  onChange={this.onChange}
                  error={errors.email}

                />
  
                <input className="btn btn-block btn-dark" type="submit" value="Update contact" />
              </form>
            </div>
          </div>

        )}
      </Consumer>

    )
  }
}

export default EditContact;
