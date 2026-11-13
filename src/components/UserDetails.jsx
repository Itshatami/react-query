import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const fetchUserDetails = ({ queryKey }) => {
    return axios.get(`https://fakestoreapi.com/users/${queryKey[1]}`);
  };

  const { data } = useQuery(["users", id], fetchUserDetails);
  console.log(data);

  return (
    <div>
      <h4>{data.data.username}</h4>
      <h4>{data.data.email}</h4>
    </div>
  );
}

export default UserDetails;
