import { useParams } from "react-router-dom";
import { useUserDetails } from "../hooks/queries";

function UserDetails() {
  const { id } = useParams();
  const { data } = useUserDetails(id);
  console.log(data);

  return (
    <div>
      <h4>userDetails - {id}</h4>
    </div>
  );
}

export default UserDetails;
