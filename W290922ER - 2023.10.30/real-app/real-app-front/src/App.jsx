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
import ProtectedRoute from "./components/common/protectedRoute";

import cardsService from "./services/cardsService";
import CardsCreate from "./components/cardsCreate";
import CardDelete from "./components/cardDelete";
import CardsEdit from "./components/cardsEdit";

cardsService.getAll().then(console.log);

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
          <Route
            path="/my-cards"
            element={
              <ProtectedRoute onlyBiz>
                <MyCards />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-card"
            element={
              <ProtectedRoute onlyBiz>
                <CardsCreate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-cards/delete/:id"
            element={
              <ProtectedRoute onlyBiz>
                <CardDelete />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-cards/edit/:id"
            element={
              <ProtectedRoute onlyBiz>
                <CardsEdit />
              </ProtectedRoute>
            }
          />
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
