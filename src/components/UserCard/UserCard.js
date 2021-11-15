const UserCard = ({ user }) => {
  return (
    <li>
      <h2>{user.name}</h2>
      <p>{user.username}</p>
      <p>{user.bio}</p>
      <img src={user.photo} alt={user.name}></img>
    </li>
  );
};

export default UserCard;
