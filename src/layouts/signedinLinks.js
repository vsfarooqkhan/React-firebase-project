import React from 'react'
import { NavLink } from 'react-router-dom'
import { isExpressionWrapper } from '@babel/types'
const SignedinLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">New Project</NavLink></li>
            <li><NavLink to="/">Logout</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">Log</NavLink></li>
            <li><NavLink to="/"></NavLink></li>
        </ul>
    )
}
export default SignedinLinks