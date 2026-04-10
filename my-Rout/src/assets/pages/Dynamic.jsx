import { useParams } from "react-router-dom";

function Dynamic() {
  const { name } = useParams();

  return (
    <div>
      <h2>Welcome</h2>
      <p>Your Name: {name}</p>
    </div>
  );
}

export default Dynamic;