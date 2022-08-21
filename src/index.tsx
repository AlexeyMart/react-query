import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "antd/dist/antd.min.css";
import "react-toastify/dist/ReactToastify.css";
import { staleTime } from "./constants";
import "./index.css";

// options также можно применять в каждом отдельном useQuery
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, // default = 3
      staleTime, // 5 mins, default = 0
      // defaults params
      cacheTime: 300000, // 5 minutes
      refetchOnMount: true, // refetch on mount if data is stale. values: true | false | 'always'
      refetchOnWindowFocus: true, // refetch on window focus after losing it if data is stale. true | false | 'always'
      refetchInterval: false, // задание interval для refetch. false | number (ms)
      refetchIntervalInBackground: false, // при потере фокуса окна refetchInterval встает на паузу.
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

    <ToastContainer autoClose={1500} />

    <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
  </QueryClientProvider>
);
