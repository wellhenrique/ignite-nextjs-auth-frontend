import type { AppProps } from "next/app";
import { AuthProvider } from "../context/authContext";
import "../styles/home.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}

export default MyApp;
