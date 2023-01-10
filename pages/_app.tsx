import store from "store";
import "styles/globals.scss";
import { Provider } from "react-redux";
import { AppPropsWithLayout } from "typings/pages";

function App({ Component, pageProps }: AppPropsWithLayout) {
  const perpage = Component.perpage ?? ((page) => page);
  return (
    <Provider store={store}>{perpage(<Component {...pageProps} />)}</Provider>
  );
}

export default App;
