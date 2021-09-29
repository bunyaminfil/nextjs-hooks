import { useState, useEffect } from "react";
function UserComponent(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUser(props.id);

    async function getUser(id) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      setUser(data);
    }
  }, []);

  return (
    <div>
      {props.user ? (
        <div style={{ display: "flex" }}>
          <h1>{props.user.id}</h1>
          <h1>{props.user.name}</h1>
          <h1>{props.user.username}</h1>
          <h1>{props.user.email}</h1>
        </div>
      ) : null}
      {user ? (
        <div style={{ display: "flex" }}>
          <h1>{user.id}</h1>
          <h1>{user.name}</h1>
          <h1>{user.username}</h1>
          <h1>{user.email}</h1>
        </div>
      ) : null}
    </div>
  );
}

export default UserComponent;
