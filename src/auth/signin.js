import React from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import firebaseConfig from './firebaseConfig'
import * as firebase from 'firebase/app';
import 'firebase/auth';
const firebaseApp = firebase.initializeApp(firebaseConfig);

class Signin extends React.Component {
    state = {
        email :'',
        password:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    logOut = (e) => {
        e.preventDefault()
        firebase.auth().signOut()
    }
    handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            console.log(error.code)
            console.log(error.message)
            if(error.code == 'auth/invalid-email') {
                alert("The email you have entered is in incorrect format")
            }
            else if(error.code == "auth/wrong-password"){
                alert("The password you have entered is incorrect")
            }
            else if(error.code == "auth/user-not-found") {
                alert("Email not found")
            }
            else if(error.code == "auth/too-many-requests"){
                alert("Too many requests.  Please try again after some time .")
            }
            else {
                alert(error.message)
            }
           })
    }
    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
          } = this.props;
          
        return (
            <div>
                Signin
                <div className="container">  
                {
                    
                    user 
                        ? <div><p>Hello, {user.displayName}</p>
                        <p>You profile :</p><img src={user.photoURL} width="50px" height="50px"></img><p>Your email : {user.email}</p></div>
                :         
                    <form onSubmit={this.handleSubmit} className="white">
                        <div className="input-field">
                            <label htmlFor="email"> Email</label>
                            <input type = "text" id="email" onChange={this.handleChange}></input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password"> Password</label>
                            <input type="password" id ="password" onChange={this.handleChange}></input>
                        </div>
                        <div className="input-field">
                            <button  className ="btn pink lighten-2 z-depth-0">Login</button> 
                        </div>
                    </form>
                }
                {/* {
            user
              ? <div><p>Hello, {user.displayName}</p><p>Your email : {user.email}</p></div>
              : <p>Please sign in.</p>
          } */}

          {
            user
              ? <button className="btn blue lighten-2 z-depth-0" onClick={this.logOut}>Sign out</button>
              : <button className="btn blue lighten-2 z-depth-0" onClick={signInWithGoogle}>Sign in with Google</button>
          }
            </div>
            </div>
        )
    }
}
const firebaseAppAuth = firebaseApp.auth();
const loginAuth = firebaseApp.auth().signInWithEmailAndPassword;
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
  loginAuth,
})(Signin);