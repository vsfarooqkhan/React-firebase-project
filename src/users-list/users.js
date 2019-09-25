import React from 'react'
import firebase from  'firebase'
export default class UserList extends React.Component {
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
        return(    
            <div className="user-list section">
                {
                this.state.user != null ?
                  <div>
                <div className= "card z-depth-0 user-summary">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title"> User name</span>
                        <p> User name</p>
                        <p className="grey-name">Sept 19</p>
                    </div>
                </div>
                <div className= "card z-depth-0 user-summary">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title"> User name</span>
                        <p> User name</p>
                        <p className="grey-name">Sept 19</p>
                    </div>
                </div>
                <div className= "card z-depth-0 user-summary">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title"> User name</span>
                        <p> User name</p>
                        <p className="grey-name">Sept 19</p>
                    </div>
                </div>
                </div>  
                :
                <div> <p>Not logged in</p>
                </div>
                }
            </div>
            
        )
    }
}