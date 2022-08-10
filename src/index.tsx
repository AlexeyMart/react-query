import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { staleTime } from "./constants";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, // default = 3
      staleTime, // default = 0
      // defaults
      // cacheTime: 300000,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
  </QueryClientProvider>
);
