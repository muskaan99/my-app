import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "98vh",
          width: "98vw",
          border: "1px solid black",
          boxShadow: "0 10 10px rgba(77, 77, 77, 0.589)",
          borderRadius: 10,
          backgroundColor: "white",
          color: "black",
          overflow: "auto",
        }}
      >
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
