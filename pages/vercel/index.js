import VercelComponent from "../../components/VercelComponent";
import axios from "axios";

function Vercel({ data, error }) {
  return <VercelComponent data={data} />;
}

Vercel.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get("https://api.github.com/repos/vercel/next.js");
    const data = res.data;
    return { data };
  } catch (error) {
    return { error };
  }
};

export default Vercel;
