// "use client";
import "./globals.css";
// import { QueryClientProvider, QueryClient } from "react-query";
// import { store } from "../redux/store";
// import { Provider } from "react-redux";

export const metadata = {
  title: "My Sous App",
  description: "Generated by create next app",
};

// const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    // <QueryClientProvider client={queryClient}>
    //   <Provider store={store}>
    <html lang="en">
      <body>{children}</body>
    </html>
    //   </Provider>
    // </QueryClientProvider>
  );
}
