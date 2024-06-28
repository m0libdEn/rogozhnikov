import {useState } from "react";
import "./App.css";
import PostList from "./pages/Post/PostList";
import SignIn from "./pages/Sign In/SignIn";
import RouterComponent from "./RouterComponent";


const App = () => {
  const [log, setLog] = useState(false);

  const handleLog = () => {
    setLog(true);
  };
  return (
    // <div className="App">
    //   {!log ? (
    //     <SignIn isSigned={handleLog} />
    //   ) : (<PostList/>)}
    // </div>

    <div>
      <RouterComponent></RouterComponent>
    </div>
  );
};

export default App;