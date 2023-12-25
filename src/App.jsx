import Navbar from "./components/Navbar.jsx";
import NewsBord from "./components/NewsBord.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  // const [query, setQuery] = useState("everythings");
  const [category, setCategory] = useState("");
  return (
    <div className="news">
      <Navbar setCategory={setCategory} />
      <NewsBord category={category} />
    </div>
  );
}

export default App;
