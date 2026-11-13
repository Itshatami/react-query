
import { Link } from "react-router-dom";
import { useUsersData } from "../hooks/queries";

function UsersPage() {

  const { data, isLoading, error, isError, refetch } = useUsersData()
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
