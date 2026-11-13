import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function UsersPage() {
  const fetchUsers = () => {
    console.log("fetching");

    return axios.get("https://fakestoreapi.com/users");
  };
  const { data, isLoading, error, isError, refetch } = useQuery(["users"], fetchUsers, {
    // cacheTime: 5000,
    // staleTime: 5000,
    // refetchOnMount:false
    // refetchOnWindowFocus:false
    // refetchInterval: 2 * 1000,
    enabled:false
  });
  console.log({ data, isLoading, isError, error });
  // if (isLoading) return <h1>Loading...</h1>;
  // if (isError) return <h1>Something went Wrong - {error.message}</h1>;

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <button onClick={refetch}>Refetch</button>
      {data?.data.map((user) => (
        <p key={user.id}>{user.username}</p>
      ))}
    </div>
  );
}

export default UsersPage;
