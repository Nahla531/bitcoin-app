import "../styles/globals.scss";
import "../styles/main.scss";
import store from "../redux/store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
