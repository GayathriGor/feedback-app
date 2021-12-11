import React from 'react';
import PropTypes from 'prop-types'


function Header({text, bgColor, textColor}) {
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor
    }
    return (
        <header style={headerStyle}>
            <div className="container">
                <h1>{text}</h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: 'white'
}

Header.propTypes = {
    text: PropTypes.string.isRequired
}
export default Header
