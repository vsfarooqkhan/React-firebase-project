import React from 'react'
import * as firebase from 'firebase/app';
import 'firebase/auth'
import Signin from './signin'
export default class Signup extends React.Component {
    state = {
        email :'',
        password:'',
        firstName:'',
        lastName:'',
        user:null,
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       brand: "Ford",
    //       model: "Mustang",
    //       color: "red",
    //       year: 1964
    //     };
    //   }
      
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            alert("User has been added")
        }).catch(function(error) {
            alert('Error :'+error.message);
           })
    }
    logOut = (e) => {
        e.preventDefault()
        firebase.auth().signOut()
    }
    signIn1 = () => {
        window.location.href ='/signin'
    }
    getDetails = () => {
        firebase.auth().onAuthStateChanged(user => {
            user
              ? this.setState({ user })
              : this.setState({ user: null });
          });   
    }
    componentDidMount() {
        this.getDetails()
    }
    render() {
        return (
            
            <div>
            
            {
                this.state.user != null ?
                <div> 
                <h4>User already logged in </h4>
                <p>{this.state.user.email}</p>
                <button className="btn dark ilghten-4 z-depth-0" onClick={this.logOut}>Signout </button>
                </div>
                :
            <div className="container">
                <h2> Signup</h2>
                <form onSubmit={this.handleSubmit} className="white">
                    <div className="input-field">
                        <label htmlFor="FirstName"> First Name</label>
                        <input type = "text" id="firstName" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName"> Last Name</label>
                        <input type = "text" id="lastName" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email"> Email</label>
                        <input type = "text" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password"> Password</label>
                        <input type="text" id ="password" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <button  className ="btn pink lighten-2 z-depth-0">Signup</button> <p></p>
                        <button type="button" onClick={this.signIn1} className="btn blue lighten-2 z-depth-0">Signin </button>
                    </div>
                </form>
            </div>
            }
            </div>
        )
    }
}
