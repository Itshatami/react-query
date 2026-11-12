import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function HomePage() {
  const fetchUsers = () => {
    return axios.get("https://fakestoreapi.com/users");
  };
  const { data, isLoading, error, isError } = useQuery(["users"], fetchUsers);
  console.log({ data, isLoading, isError, error });
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Something went Wrong - {error.message}</h1>;
  return (
    <div>
      {data.data.map((user) => (
        <p>{user.username}</p>
      ))}
    </div>
  );
}

export default HomePage;
