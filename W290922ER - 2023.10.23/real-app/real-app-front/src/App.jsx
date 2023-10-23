import { Route, Routes, useResolvedPath } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import NavBar from "./components/navbar";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import { useState } from "react";
import usersService from "./services/usersService";

function Auth() {
  const [user, setUser] = useState(usersService.getUser());

  const refreshUser = () => setUser(usersService.getUser());

  const login = async (credentials) => {
    const response = await usersService.login(credentials);

    refreshUser();

    return response;
  };

  const logout = () => {
    usersService.logout();
    refreshUser();
  };

  return {
    user,
    login,
    logout,
    signUp: usersService.createUser,
  };
}

function App() {
  const { user, login, logout, signUp } = Auth();

  return (
    <div className="app d-flex flex-column min-vh-100">
      <header className="pb-3">
        <NavBar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/sign-in"
            element={<SignIn onSubmit={login} redirect="/" />}
          />
          <Route
            path="/sign-up"
            element={<SignUp onSubmit={signUp} redirect="/sign-in" />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
