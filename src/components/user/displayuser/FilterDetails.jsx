import PropTypes from "prop-types";

const FilterDetails = ({heading, filteredDetails}) => {
    return (
        <div className="details">
            <h2 className="heading">{heading} </h2>

            <div className="content">
                {filteredDetails.map((data,index)=> {
                    const title = Object.keys(data)
                    const value = Object.values(data)

                    return (
                        <p className="title" key={index}>{title}: <span className="value">{value}</span></p>
                    )
                })}
            </div>
        </div>
    );
}

FilterDetails.propTypes = {
    heading : PropTypes.string,
    filteredDetails: PropTypes.array,
}
 
export default FilterDetails;