import React from 'react'
import { Link } from 'react-router-dom'
import SignedinLinks from './signedinLinks'
import SignedoutLinks from './signedoutLinks'

// import { isExpressionWrapper } from '@babel/types'
const Navbar = () => {
    return (
        <nav className= "nav-wrapper grey darken-3">
            <div className = "container">
                <Link to ="/" className="brand-logo">Home page</Link>
                <SignedinLinks />
                <SignedoutLinks />
                
            </div>
            </nav>
    )
}
export default Navbar