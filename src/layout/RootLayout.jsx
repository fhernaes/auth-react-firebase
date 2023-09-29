import { Outlet } from "react-router-dom";
import { NavBar } from '../components/Navbar';


export const RootLayout = () => {
    return (
        <>
        <NavBar />
            <Outlet />
        </>
    );
};
