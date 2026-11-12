import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./components/HomePage";

function App() {
  return (
    <QueryClientProvider client={QueryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
