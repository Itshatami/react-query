import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function UsersPage() {
  const fetchUsers = () => {
    console.log("fetching");
    return axios.get("https://fakestoreapi.com/users");
  };

  const onSuccess = (data) => console.log("success", data);
  const onError = (error) => console.log("error", error);

  const { data, isLoading, error, isError, refetch } = useQuery(["users"], fetchUsers, {
    // cacheTime: 5000,
    // staleTime: 5000,
    // refetchOnMount:false
    // refetchOnWindowFocus:false
    // refetchInterval: 2 * 1000,
    // enabled:false,
    onSuccess,
    onError,
  });
  console.log({ data, isLoading, isError, error });

  return (
    <div>
      {isLoading && <h4>Loading...</h4>}
      {isError && <h4>Something went Wrong - {error.message}</h4>}
      <button onClick={refetch}>Refetch</button>
      {data?.data.map((user) => (
        <p key={user.id}>{user.username}</p>
      ))}
    </div>
  );
}

export default UsersPage;
