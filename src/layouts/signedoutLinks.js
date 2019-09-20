import React from 'react'
import { NavLink } from 'react-router-dom'
import { isExpressionWrapper } from '@babel/types'
const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/signup">Sign up</NavLink></li>
            <li><NavLink to="/signin">Sign in</NavLink></li>
            <li><NavLink to="/"></NavLink></li>
        </ul>
    )
}
export default SignedOutLinks