
import { lazy } from 'react';
const Home = lazy(() => import("./Home"));
const Auth = lazy(() => import("./Auth"));
import LayoutIndex from './Layout'
export {
    Home,
    LayoutIndex,
    Auth,
    // ShopIndex
}