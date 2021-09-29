import Link from "next/link";
import UserComponent from "./UserComponent";

const UsersComponent = (props) => {
  return (
    <div>
      {props.users && (
        <div className="users">
          {props.users.map((user, index) => (
            <Link href={"/user/" + user.id} key={index}>
              <a>
                <UserComponent user={user} />
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersComponent;
