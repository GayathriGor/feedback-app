import PropTypes from 'prop-types';

function Card({children, reverse}) {
    return (
        // this is conditional class, if we add style here, then it's conditional styling
        <div className={`card ${reverse && 'reverse'}`}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}
export default Card
