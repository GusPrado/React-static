import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <img src="https://icon-library.net/images/like-icon-facebook/like-icon-facebook-10.jpg"/>
                    <div>
                        <span>My profile</span>
                        <i className="material-icons">face</i>
                    </div>
                </nav>
            
            </header>
        )
    }
}

export default Header

