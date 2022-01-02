import React from 'react'

 function Header({welcomeMessage, clickToEnter}) {
    return (
        <div>
            <h1>Welcome To The World Of {welcomeMessage}</h1>
            <button>{clickToEnter}</button>
        </div>
    )
}

export default Header;