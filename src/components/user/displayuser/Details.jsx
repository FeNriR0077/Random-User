const Details = ({user, isActive}) => {

    const {dob, location, phone, email, name, gender, registered, cell, login} = user
    const { first, last } = name;
    const { age, date } = dob;
    const formattedDate = date.slice(0,10)
    const { city, postcode, country, street :{number: streetNumber, name:streetName}} = location;
    const formattedRegistrationDate = registered.date.slice(0,10)
    const {username, password} = login;
    
    if (isActive === 1) {
        return (
            <div className="details">
                <h2 className="heading">Personal Information: </h2>
                <div className="content">
                    <p className="title">Name: <span className="value">{first} {last}</span></p>
                    <p className="title">Date of Birth: <span className="value">{formattedDate}</span></p>

                    <p className="title">Gender: <span className="value capitalize">{gender}</span></p>
                    <p className="title">Age: <span className="value">{age}</span></p>
                    <p className="title">Registered Date: <span className="value">{formattedRegistrationDate}</span></p>
                </div>
            </div>
        );
    }
    if (isActive === 2) {
        return (
        <div className="details">
            <h2 className="heading">Address: </h2>
            <div className="content">
                <p className="title">Postcode: <span className="value">{postcode}</span></p>
                <p className="title">Street: <span className="value">{streetNumber} {streetName}</span></p>
                <p className="title">City: <span className="value">{city}</span></p>
                <p className="title">Country: <span className="value">{country}</span></p>
            </div>  
          </div>
        );
    }
    if (isActive === 3) {
        return (
        <div className="details">
            <h2 className="heading">Contact: </h2>
            <div className="content">
            <p className="title">Cell number: <span className="value">{cell}</span></p>
            <p className="title">Phone number: <span className="value">{phone}</span></p>
            </div>    
        </div>
        );
    }
    if (isActive === 4) {
        return (
        <div className="details">
            <h2 className="heading">Email/Credentials: </h2>
            <div className="content">
            <p className="title">Email: <span className="value">{email}</span></p>
            <p className="title">UserName: <span className="value">{username}</span></p>
            <p className="title">Password: <span className="value">{password}</span></p>
            </div>
        </div>
        );
    }
}
 
export default Details;