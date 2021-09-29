import { withRouter } from "next/router";
import UserComponent from "../../components/UserComponent";

function User(props) {
  const { id } = props.router.query;
  return (
    <div>
      <UserComponent id={id} />
    </div>
  );
}

export default withRouter(User);
