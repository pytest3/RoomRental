import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./globalstyles/globalStyles";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Root from "./pages/Root";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
        </Route>
        {/* <Route index element={<Home />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
