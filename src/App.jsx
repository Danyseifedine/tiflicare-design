import { Outlet } from "react-router-dom";
import Footer from "./components/layouts/Footer/footer";
import NavbarDefault from "./components/layouts/Navbar/Navbar";

function App() {
  return (
    <>
      <NavbarDefault />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
