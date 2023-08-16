import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./globalstyles/globalStyles";
import {
  About,
  Rooms,
  RoomDetails,
  Login,
  ErrorBoundary,
  Home,
  Dashboard,
  Income,
  Reviews,
  HostRooms,
  HostRoomDetails,
  HostRoomPricing,
  HostRoomPhotos,
} from "./pages";
import { HostLayout, RootLayout, HostRoomLayout } from "./components/layout";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="rooms" element={<Rooms />}></Route>
          <Route path="rooms/:id" element={<RoomDetails />}></Route>

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="income" element={<Income />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
            <Route path="rooms" element={<HostRooms />}></Route>
            <Route path="rooms/:id" element={<HostRoomLayout />}>
              <Route index element={<HostRoomDetails />} />
              <Route path="pricing" element={<HostRoomPricing />} />
              <Route path="photos" element={<HostRoomPhotos />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorBoundary></ErrorBoundary>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
