import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/Global.styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <ToastContainer position="top-center" />
      <Outlet />
      <GlobalStyles />
    </div>
  );
}

export default App;
