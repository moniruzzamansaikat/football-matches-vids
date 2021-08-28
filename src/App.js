import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TopHeader from "./components/TopHeader/TopHeader";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <div className="top_and_nav">
        <TopHeader />
        <Navbar />
      </div>
      <Hero />

      <div className="container">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
