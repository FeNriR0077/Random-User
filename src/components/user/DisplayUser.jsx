import Navigation from "./Navigation";

const iconList = [
  {icon: <i className="fa-solid fa-user icons"></i>, id: 1},
  {icon: <i className="fa-solid fa-address-book icons"></i>, id:2},
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
          ...rest
        } = user;

        const { title, first, last } = name;
        const { large} = picture;

        console.log(user);
        return (
          <div className="user-container" key={value}>
            <div className="general-info">
              <img src={large} className="image" />

              <p className="name">
                {title} {first} {last}
              </p>

              <p className="gender">({gender})</p>
            </div>

            <Navigation iconList={iconList} user={user}/>
          </div>
        );
      })}
    </>
  );
};

export default DisplayUser;
