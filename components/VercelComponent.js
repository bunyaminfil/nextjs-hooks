import Link from "next/link";

const VercelComponent = (props) => {
  return (
    <div>
      <div>Owner id:{props.data.id}</div>
      <div>Owner login:{props.data.login}</div>
      <div>
        Owner url:
        <Link href={props.data.url}>{props.data.url}</Link>
      </div>
    </div>
  );
};

export default VercelComponent;
