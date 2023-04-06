import PropTypes from "prop-types";

const Error = ({errorMessage}) => {
    return (
        <div className="error-message">
            <p>Sorry, some error occured at the moment. Please try again later.</p>
            <p>({errorMessage})</p>
        </div>
    );
}

Error.defaultProps = {
    errorMessage: "Error"
}

Error.propTypes = {
    errorMessage: PropTypes.string,
}

export default Error;