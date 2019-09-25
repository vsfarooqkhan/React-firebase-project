import React from 'react'
import { NavLink } from 'react-router-dom'
import * as firebase from 'firebase/app';
import 'firebase/auth'
import { isExpressionWrapper } from '@babel/types'

export default class SignedinLinks extends React.Component {
    state = {
        user : null
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            user
              ? this.setState({ user })
              : this.setState({ user: null });
          });   
    }
    logOut = (e) => {
        e.preventDefault()
        firebase.auth().signOut()
    }
render() {
    return (
        <ul className="right">
            {
                this.state.user != null 
                ? 
                <ul className="right"> 
                    <li><NavLink to="/">New Project</NavLink></li>
                    <li><NavLink to="/logout">Logout</NavLink></li>
                    <li>
                        <NavLink to="/" className="btn waves-effect waves-light purple accent-4">Hi,
                        {
                        this.state.user.displayName != null ?
                         this.state.user.displayName : this.state.user.email }
                        </NavLink>
                        </li>
                    </ul>
                : 
                
                    <li><NavLink to ="/" className="btn waves-effect waves-light red pink lighten-1">Login</NavLink>
                    </li>
                
            }
            <li><NavLink to="/"></NavLink></li>
        </ul>
    )
}
}