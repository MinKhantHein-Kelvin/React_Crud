import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/pages/PageNotFound";
import AddUser from "./components/users/adduser";
import EditUser from "./components/users/EditUser";
import UserDetails from "./components/users/UserDetails";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/user/add" element={<AddUser/>}/>
          <Route path="/user/edit/:id" element={<EditUser/>}/>
          <Route path="/user/details/:id" element={<UserDetails/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
