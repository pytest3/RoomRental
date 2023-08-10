import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./globalstyles/globalStyles";
import {
  About,
  Rooms,
  Root,
  RoomDetails,
  Login,
  ErrorBoundary,
  Home,
} from "./pages";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="rooms" element={<Rooms />}></Route>
          <Route path="rooms/:id" element={<RoomDetails />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<ErrorBoundary></ErrorBoundary>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
