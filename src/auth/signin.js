import React from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import firebaseConfig from './firebaseConfig'
import * as firebase from 'firebase/app'
import 'firebase/auth'
const firebaseApp = firebaseConfig
class Signin extends React.Component {
    state = {
        email :'',
        password:'',
        name :'',
        user:null,
        authUser: null,
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
            alert(error.message)
            this.setState({name :'farooq'})
           })
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(authUser => {
            authUser
              ? this.setState({ authUser })
              : this.setState({ authUser: null });
          }); 
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
                        <p>You profile :</p><img src={user.photoURL} width="50px" height="50px"></img><p>Your email : {user.email}</p>
                        <p></p></div>
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
            this.state.authUser !=null
              ? <div>
                  <button className="btn blue lighten-2 z-depth-0" onClick={this.logOut}>Sign out</button>
                  
                  </div>
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