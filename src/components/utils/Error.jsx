const Error = ({errorMessage}) => {
    return (
        <div className="error-message">
            <p>Sorry, some error occured at the moment. Please try again later.</p>
            <p>({errorMessage})</p>
        </div>
    );
}
 
export default Error;