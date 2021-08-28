import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TopHeader from "./components/TopHeader/TopHeader";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./adapter/firebase";
import PrivateRoute from "./pages/PrivateRoute";
import { fetchAllMatches } from "./adapter/xhr";
import PersonalPage from "./pages/PersonalPage";
import AllMathesPage from "./pages/AllMathesPage";
import Footer from "./components/Footer/Footer";
import { NotificationContainer } from "react-notifications";

export const userContext = createContext();
export const matchContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
    });

    fetchAllMatches(4).then((mchs) => {
      setMatches(mchs);
    });
  }, []);

  return (
    <Router>
      <userContext.Provider value={{ user, setUser }}>
        <matchContext.Provider value={{ matches, setMatches }}>
          <div className="top_and_nav">
            <TopHeader />
            <Navbar />
          </div>

          <Switch>
            <Route path="/" exact>
              <Hero />
              <div className="container">
                <HomePage />
              </div>
            </Route>
            <Route path="/matches">
              <div className="container" style={{ marginTop: "200px" }}>
                <AllMathesPage />
              </div>
            </Route>
            <Route path="/login">
              <div className="container" style={{ marginTop: "200px" }}>
                <LoginPage />
              </div>
            </Route>
            <PrivateRoute path="/saved">
              <div style={{ marginTop: "200px" }}></div>
              <div className="container">
                <PersonalPage />
              </div>
            </PrivateRoute>
          </Switch>

          <Footer />
        </matchContext.Provider>
      </userContext.Provider>

      <NotificationContainer />
    </Router>
  );
}

export default App;
