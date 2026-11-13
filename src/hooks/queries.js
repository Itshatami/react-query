import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUsersData = () => {
  const fetchUsers = () => {
    console.log("fetching");
    return axios.get("https://fakestoreapi.com/users");
  };
  return useQuery(["users"], fetchUsers, {
    // cacheTime: 5000,
    // staleTime: 5000,
    // refetchOnMount:false
    // refetchOnWindowFocus:false
    // refetchInterval: 2 * 1000,
    // enabled:false,
    // onSuccess,
    // onError,
  });
};

const useUserDetails = (id) => {
  const fetchUserDetails = ({ queryKey }) => {
    return axios.get(`https://fakestoreapi.com/users/${queryKey[1]}`);
  };
  return useQuery(["users", id], fetchUserDetails);
};

export { useUserDetails, useUsersData };
