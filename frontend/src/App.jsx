import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/Global.styled";
function App() {
  return (
    <div>
      <Outlet />
      <GlobalStyles />
    </div>
  );
}

export default App;
