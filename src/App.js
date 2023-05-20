// IMPORTS 
import { Route, Routes } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Error from "./pages/Error";

// LAYOUTS
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

// COMPONENTS
import EditUser from "./components/EditUser";
import Transactions from "./components/Transactions";

// STYLES
import "./styles/App.scss";


// ROUTES & HEADER / FOOTER
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user:id" element={<User />} />

        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
