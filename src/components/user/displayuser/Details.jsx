import PropTypes from "prop-types";
import FilterDetails from "./FilterDetails";

const Details = ({user, isActive}) => {
    let filteredDetails;
    let heading;

    const {dob, location, phone, email, name, gender, registered, cell, login} = user
    const { first, last } = name;
    const { age, date } = dob;
    const formattedDateOfBirth = date.slice(0,10)
    const { city, postcode, country, street :{number: streetNumber, name:streetName}} = location;
    const formattedRegistrationDate = registered.date.slice(0,10)
    const {username, password} = login;

    if (isActive === 1) {
        filteredDetails = [{Name: first+" "+last, key:0}, {"Date Of Birth": formattedDateOfBirth}, {Gender: gender}, {Age: age}, {"Registered Date": formattedRegistrationDate}]
        heading = "Personal Information:";
    }
    if (isActive === 2) {
        filteredDetails = [ {Psostcode: postcode}, {"Street Number": streetNumber}, {Street: streetName}, {City: city}, {Country: country}]
        heading="Address:"
    }
    if(isActive === 3) {
        filteredDetails = [{Cell: cell},{Phone: phone}]
        heading="Contact:";
    }
    if (isActive === 4) {
        filteredDetails = [ {Email: email}, {UserName: username}, {Password: password}]
        heading = "Email/Credentials:";
    }

    return (
        <>
            {filteredDetails && <FilterDetails heading={heading} filteredDetails={filteredDetails} />}
        </>
    )
}

Details.defaultProps = {
    large: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    title: 'Mr',
    first: 'Sam',
    last: 'Lee',
    formattedDateOfBirth: "2020-03-22",
    age: 20,
    formattedRegistrationDate: "2020-01-22",
    postcode: 12345,
    streetNumber: 10,
    street: "Lane 1",
    city: 'Kathmandu',
    country: 'Nepal',
    username: 'user_name',
    password: 'P@ssW0rD',
    isActive: 1,
    heading: "Personal Information"
}

Details.propTypes = {
    large: PropTypes.string,
    title: PropTypes.string,
    first: PropTypes.string,
    last: PropTypes.string,
    formattedDateOfBirth: PropTypes.string,
    age: PropTypes.number,
    formattedRegistrationDate: PropTypes.string,
    postcode: PropTypes.number,
    streetNumber: PropTypes.number,
    street: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    isActive: PropTypes.number,
    heading: PropTypes.string,
}

export default Details;