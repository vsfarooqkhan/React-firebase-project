import React from 'react'
import * as firebase from 'firebase/app';
import 'firebase/auth'
import Signin from '../auth/signin'
export default class Logout extends React.Component {
    logOut = (e) => {
        firebase.auth().signOut()
    }
    componentDidMount() {
        this.logOut()
    }
    render() {
        return (
                <Signin />
        )
    }
}