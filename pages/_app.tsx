import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import type { AppProps } from "next/app";
import Layout from "components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />;
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.js" async></script>
      </Layout>
    </Provider>

  );
}

export default MyApp;
