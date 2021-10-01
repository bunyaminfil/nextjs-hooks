import VercelComponent from "../../components/VercelComponent";

function Vercel(json) {
  return (
    <div>
      <VercelComponent data={json} />
    </div>
  );
}

Vercel.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return json;
};

export default Vercel;
