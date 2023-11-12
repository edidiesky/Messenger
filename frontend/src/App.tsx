import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { io } from 'socket.io-client';
const socketIo = io as any

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

  const dispatch = useAppDispatch()
  const { backgroundtheme, colortheme } = useAppSelector(store => store.theme)
  // set the theme

  // React.useEffect(() => {
  //   dispatch(GetUserCookie({data:"any"}))
  // }, [])
  socketIo('http://localhost:4000');

  React.useEffect(() => {
    dispatch(getBackgroundTheme('any'))
    dispatch(getColorTheme('any'))
  }, [])

  // store the theme background and color in the local storage of the user broweser
  React.useEffect(() => {
    document.documentElement.className = `${backgroundtheme} ${colortheme}`
    // store
    localStorage.setItem('theme', backgroundtheme);
    localStorage.setItem('colortheme', colortheme);
  }, [backgroundtheme, colortheme])


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
