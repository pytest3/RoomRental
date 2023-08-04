import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./globalstyles/globalStyles";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
