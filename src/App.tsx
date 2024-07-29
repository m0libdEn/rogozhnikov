import { Provider } from "../node_modules/react-redux/dist/react-redux";
import "./App.css";
import store from "./redux/index";
import RouterComponent from "./router/RouterComponent";


const App = () => {
  return (
    <Provider store={store}>
       <div>
        <RouterComponent/>
      </div>
    </Provider>
  );
};

export default App;

