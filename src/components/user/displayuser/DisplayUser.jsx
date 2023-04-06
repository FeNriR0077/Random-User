import PropTypes from "prop-types";
import Navigation from "../navigation";
import { useState } from "react";

const iconList = [
  {icon: <i className="fa-solid fa-user icons"></i>, id: 1},
  {icon: <i className="fa-solid fa-map-location-dot icons"></i>, id:2},
  {icon: <i className="fa-solid fa-phone icons"></i>, id: 3},
  {icon: <i className="fa-solid fa-envelope icons"></i>, id: 4},
]

const DisplayUser = ({ userData }) => {
  return (
    <>
      {userData && userData.map((user) => {
        const {
          name,
          picture,
          gender,
          location,
          login,
          ...rest
        } = user;

        const { title, first, last } = name;
        const { large} = picture;
        const { city, country } = location;
        const {uuid, username} = login;

        if (name) {
          document.title = `${first} ${last}`
        }

        return (
          <div className="user-container" key={uuid}>
            <div className="profile-background"></div>

            <div className="general-info">
              <img src={large} className="image" />

              <p className="name">
                {title} {first} {last}
              </p>

              <p className="city-country">
                {city}, {country}
              </p>

              <p className="username">
                @{username}
              </p>
            </div>

            {user && <Navigation iconList={iconList} user={user}/>}
          </div>
        );
      })}
    </>
  );
};

DisplayUser.defaultProps = {
  large: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  title: 'Mr',
  first: 'Sam',
  last: 'Lee',
  city: 'Kathmandu',
  country: 'Nepal',
  username: 'user_name'
}

DisplayUser.propTypes = {
  large: PropTypes.string,
  title: PropTypes.string,
  first: PropTypes.string,
  last: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  username: PropTypes.string,
}

export default DisplayUser;
