import { Route, Routes } from "react-router";
import NavHeader from './Header/NavHeader';
import Home  from "./Home/Home";
import Cart from "./Home/Cart";
import History from "./Home/History";

function App() {
  return (
    <div>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartitems" element={<Cart />} />
        <Route path="/history" element={<History/>} />
      </Routes>

    </div>
  );
}
export default App;
