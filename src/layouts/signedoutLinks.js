import React from 'react'
import { NavLink } from 'react-router-dom'
import { isExpressionWrapper } from '@babel/types'
import firebase from  'firebase'
export default class SignedOutLinks extends React.Component{
state = {
    user : null
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
        <ul className="right">
            {
                this.state.user != null 
                ?
                <ul className="right">

                </ul>
                :
                <ul className="right">
                    <li><NavLink to="/signup">Sign up</NavLink></li>
                    <li><NavLink to="/signin">Sign in</NavLink></li>
                    <li><NavLink to="/"></NavLink></li>
                </ul>
            }
            
        </ul>
    )
}
}
