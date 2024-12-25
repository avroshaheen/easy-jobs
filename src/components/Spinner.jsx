import { FadeLoader } from "react-spinners/";
const override = {
  display: "block",
  margin: "100px auto",
};
const Spinner = ({ loading }) => {
  return (
    <FadeLoader color="#4a0080" cssOverride={override} loading={loading} />
  );
};

export default Spinner;
