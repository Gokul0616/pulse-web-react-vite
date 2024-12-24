import "./App.css";
import Authpage from "./Components/Authpage/Authpage";
import Index from "./Components";
function App() {
  // const token2 = localStorage.setItem("jwt", "hello this is token");
  // const token3 = localStorage.removeItem("jwt");
  const token = localStorage.getItem("jwt");
  console.log(token);

  return <>{token ? <Index /> : <Authpage />}</>;
}

export default App;
