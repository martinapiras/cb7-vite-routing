import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
