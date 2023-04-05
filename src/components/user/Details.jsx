const Details = ({user, isActive}) => {

    const {dob, location, phone, email} = user
    const { age, date } = dob;
    const formattedDate = date.slice(0,10)
    const { city, postcode, country } = location;
    
    if (isActive === 1) {
        return (
            <div className="details">
                <p className="age title">Age: <span className="value">{age}</span></p>
                <p className="dob title">Date of Birth: <span className="value">{formattedDate}</span></p>
            </div>
        );
    }
    if (isActive === 2) {
        return (
        <div className="details">
            <p className="postcode title">Postcode: <span className="value">{postcode}</span></p>
            <p className="City title">City: <span className="value">{city}</span></p>
            <p className="Country title">Country: <span className="value">{country}</span></p>
          </div>
        );
    }
    if (isActive === 3) {
        return (
        <div className="details title">
            <p className="phone-number title">Phone number: <span className="value">{phone}</span></p>
        </div>
        );
    }
    if (isActive === 4) {
        return (
        <div className="details title">
            <p className="email-address title">Email: <span className="value">{email}</span></p>
        </div>
        );
    }
}
 
export default Details;