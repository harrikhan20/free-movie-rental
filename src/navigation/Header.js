import React from 'react'

 function Header({welcomeMessage, clickToEnter}) {
    return (
        <div>
            <h1>Welcome To The World Of {welcomeMessage}</h1>
            <h2>{clickToEnter}</h2>
        </div>
    )
}

export default Header;