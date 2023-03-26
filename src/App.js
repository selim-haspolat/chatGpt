import { Provider } from "react-redux";
import store from "./app/store";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
