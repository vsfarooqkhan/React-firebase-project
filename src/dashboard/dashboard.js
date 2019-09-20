import React from 'react'
import Notifications from './notifications'
import UserList from '../users-list/users'
class dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <UserList />
                        </div>
                        <div className="col s12 m5 offset-m1">
                            <Notifications />
                        </div>
                </div>
            </div>
        )
    }
}
export default dashboard