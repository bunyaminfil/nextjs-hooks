import VercelComponent from "../../components/VercelComponent";
import { getData } from "../../api/vercel";

function Vercel(json) {
  return (
    <div>
      <VercelComponent data={json} />
    </div>
  );
}

Vercel.getInitialProps = async ({ req }) => {
  const res = await getData();
  const json = await res.json();
  return json;
};

export default Vercel;
