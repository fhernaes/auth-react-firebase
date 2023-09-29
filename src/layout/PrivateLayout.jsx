import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import  { OffCanvasMenu }  from '../components/Offcanvasmenu';

export const PrivateLayout = () => {
    const { user } = useUserContext();
    return (
    <>
    <OffCanvasMenu />
    <main className="container mt-4">
      {user ? <Outlet /> : <Navigate to="/" />}
    </main>
  </>
);
};


