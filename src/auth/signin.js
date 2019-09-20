import React from 'react'

export default class signin extends React.Component {
    state = {
        email :'',
        password:''
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
            Signin
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <div className="input-field">
                        <label htmlFor="email"> Email</label>
                        <input type = "text" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password"> Password</label>
                        <input type="text" id ="password" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <button  className ="btn pink lighten-2 z-depth-0">Login</button> 
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
