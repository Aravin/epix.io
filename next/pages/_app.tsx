import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import AppLayout from "../components/layout/layout";
import "tailwindcss/tailwind.css";
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
