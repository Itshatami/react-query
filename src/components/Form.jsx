
import { useAddPost } from "../hooks/queries";

function Form() {
  

  const { mutate, data, isLoading } = useAddPost()
  console.log(data, isLoading);

  const sendHandler = () => {
    const data = {
      id: 0,
      username: "string",
      email: "string",
      password: "string",
    };
    mutate(data);
  };
  return (
    <div>
      <h1>Form</h1>
      <button onClick={sendHandler}>Send</button>
    </div>
  );
}

export default Form;
