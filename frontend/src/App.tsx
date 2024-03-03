import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import io from 'socket.io-client';
let socketIo = io as any

import "./index.css";
import {
  Auth,
  Home,
  LayoutIndex,
} from "./screens";
import { useAppDispatch, useAppSelector } from "./hooks/reduxtoolkit";
import { getBackgroundTheme, getColorTheme } from "./features/theme/themeSlice";
import HomeIndex from "./screens/Home";
import PeopleIndex from "./screens/People";
import MarketPlaceIndex from "./screens/marketplace";
import RequestsIndex from "./screens/Requests";
import LandingPage from "./screens/Landing";
import ProtectRoute from "./utils/ProtectRoute";
export default function App() {
  const [height, setHeight] = useState(0);
  const [socket, setSocket] = React.useState<any>(null)
    const { userInfo } = useAppSelector((store) => store.auth);

  const dispatch = useAppDispatch()
  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={
            <LandingPage />}></Route>
        <Route path={"/login"} element={<Auth />}></Route>
        <Route path={"/chat"} element={<LayoutIndex />}>
          <Route path="t/:id" element={
            <ProtectRoute>
              <HomeIndex />
            </ProtectRoute>} />
          <Route path="active/t/:id" element={
            <ProtectRoute>
              <PeopleIndex />
            </ProtectRoute>
          } />
          <Route path="marketplace/t/:id" element={
            <ProtectRoute>
              <MarketPlaceIndex />
            </ProtectRoute>
          } />
          <Route path="requests/t/:id" element={
            <ProtectRoute>

              <RequestsIndex />
            </ProtectRoute>
          } />

        </Route>
      </Routes>
    </div>
  );
}
