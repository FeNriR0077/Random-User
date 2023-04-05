import Navigation from "../../navigation";

const iconList = [
  {icon: <i className="fa-solid fa-user icons"></i>, id: 1},
  {icon: <i className="fa-solid fa-map-location-dot icons"></i>, id:2},
  {icon: <i className="fa-solid fa-phone icons"></i>, id: 3},
  {icon: <i className="fa-solid fa-envelope icons"></i>, id: 4},
]

const DisplayUser = ({ userData }) => {
  return (
    <>
      {userData.map((user) => {
        const {
          name,
          id: { value },
          picture,
          gender,
          location,
          login,
          ...rest
        } = user;

        const { title, first, last } = name;
        const { large} = picture;
        const { city, country } = location;
        const {username} = login;

        console.log(user);
        return (
          <div className="user-container" key={value}>
            <div className="profile-background"></div>
            <div className="general-info">
              <img src={large} className="image" />

              <p className="name">
                {title} {first} {last}
              </p>

              <p className="city-country">{city}, {country}</p>
              <p className="username">@{username}</p>
            </div>

            <Navigation iconList={iconList} user={user}/>
          </div>
        );
      })}
    </>
  );
};

export default DisplayUser;
