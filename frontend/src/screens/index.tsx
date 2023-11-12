
import { lazy } from 'react';
const Home = lazy(() => import("./Home"));
const Chats = lazy(() => import("./Chats"));
const Auth = lazy(() => import("./Auth"));
import LayoutIndex from './Layout'
export {
    Home,
    LayoutIndex,
    Auth,
    Chats
    // ShopIndex
}