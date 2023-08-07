import UserRow from "./userRow";

const UsersTable = ({ users = [] }) => {
  if (!users.length) {
    return <div>No users yet...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Company Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return <UserRow key={user.id} user={user} index={index} />;
        })}
      </tbody>
    </table>
  );
};

export default UsersTable;
