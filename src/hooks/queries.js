import { useMutation, useQuery } from "@tanstack/react-query";
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

const useAddPost = () => {
  const addPost = (data) => {
    return axios.post("https://fakestoreapi.com/users", data);
  };
  return useMutation(addPost);
};

export { useUserDetails, useUsersData, useAddPost };
