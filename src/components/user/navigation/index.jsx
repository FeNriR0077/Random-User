import { useState } from "react";
import PropTypes from "prop-types";
import {Details} from "../displayuser";

const Navigation = ({iconList, user}) => {
    const [isActive, setIsActive] = useState(1)
    const handleIconClick = (id) => {
        setIsActive(id)
    };

    return (
        <>
            <div className="nav-container">
                {iconList.map((iconDetail) => {
                    const {icon, id} = iconDetail

                    return (
                        <button key={id} type="button" className={`nav-btns ${isActive === id ? "active" : ""}`}  onClick={() => handleIconClick(id)}>
                            {icon}
                        </button>
                    )
                })}
            </div>
            
            {user && <Details user={user} isActive={isActive} />}
        </>
    )
}

Navigation.propTypes = {
    user: PropTypes.object,
    iconList: PropTypes.array,
}
 
export default Navigation;