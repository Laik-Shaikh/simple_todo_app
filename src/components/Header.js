import React from "react";

const Header = ({ title }) => {
    const date = new Date()
    return(
        <header>
            <h1>{`${title} ${date.getFullYear()}`}</h1>
        </header>
    )
}

Header.defaultProps = {
    title : "Default List"
}

export default Header;