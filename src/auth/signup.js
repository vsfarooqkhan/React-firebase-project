import React from 'react'

export default class signup extends React.Component {
    state = {
        email :'',
        password:'',
        firstName:'',
        lastName:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
            SignUp
            <div className="container">
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
                        <button  className ="btn pink lighten-2 z-depth-0">Signup</button> 
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
