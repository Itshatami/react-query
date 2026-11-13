import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

function UsersPage() {
  const fetchUsers = () => {
    console.log("fetching");
    return axios.get("https://fakestoreapi.com/users");
  };

  // const onSuccess = (data) => console.log("success", data);
  // const onError = (error) => console.log("error", error);

  const { data, isLoading, error, isError, refetch } = useQuery(["users"], fetchUsers, {
    // cacheTime: 5000,
    // staleTime: 5000,
    // refetchOnMount:false
    // refetchOnWindowFocus:false
    // refetchInterval: 2 * 1000,
    // enabled:false,
    // onSuccess,
    // onError,
  });
  console.log({ data, isLoading, isError, error });

  return (
    <div>
      {isLoading && <h4>Loading...</h4>}
      {isError && <h4>Something went Wrong - {error.message}</h4>}
      <button onClick={refetch}>Refetch</button>
      {data?.data.map((user) => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <h3>{user.username}</h3>
        </Link>
      ))}
    </div>
  );
}

export default UsersPage;
