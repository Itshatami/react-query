import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./components/HomePage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes } from "react-router-dom";
import UsersPage from "./components/UsersPage";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
