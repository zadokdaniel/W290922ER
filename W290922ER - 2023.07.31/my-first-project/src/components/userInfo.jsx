function UserInfo({ name, age, email }) {
  return (
    <div className="user-info">
      <div className="user-name">
        <span>Name:</span>
        <span>{name}</span>
      </div>
      <div className="user-email">
        <span>Email:</span>
        <span>{email}</span>
      </div>
      <div className="user-age">
        <span>Age:</span>
        <span>{age}</span>
      </div>
    </div>
  );
}

export default UserInfo;
