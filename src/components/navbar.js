import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper blue darken-3">
                <a href="#" class="brand-logo center">Directory App</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="/" onClick="this.preventdefault">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar