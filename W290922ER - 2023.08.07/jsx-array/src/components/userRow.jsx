const UserRow = ({
  user: {
    name,
    username,
    email,
    address: { city, street, suite } = {},
    phone,
    company: { name: companyName } = {},
  } = {},
  index,
}) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        {city}, {street}, {suite}
      </td>
      <td>{phone}</td>
      <td>{companyName}</td>
    </tr>
  );
};

export default UserRow;
