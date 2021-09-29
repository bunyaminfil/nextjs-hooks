import { useState, useEffect } from "react";
import UsersComponent from "../../components/UsersComponent";
function Users() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getUsers();

    async function getUsers() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const data = await response.json();
      setUsers(data);
    }
  }, []);

  return (
    <div>
      <UsersComponent users={users} />
    </div>
  );
}

export default Users;
