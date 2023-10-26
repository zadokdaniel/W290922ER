import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import NavBar from "./components/navbar";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import SignOut from "./components/signout";
import SignUpBiz from "./components/signUpBiz";
import MyCards from "./components/myCards";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <header className="pb-3">
        <NavBar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-cards" element={<MyCards />} />
          <Route path="/sign-in" element={<SignIn redirect="/" />} />
          <Route path="/sign-up" element={<SignUp redirect="/sign-in" />} />
          <Route
            path="/sign-up-biz"
            element={<SignUpBiz redirect="/my-cards" />}
          />
          <Route path="/sign-out" element={<SignOut />} redirect="/" />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
