import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Sidebar from "../../components/SideBar/Sidebar";

const ProtectedRoutes = () => {
  const userUid = useSelector((state: RootState) => state.user.uid);

  if (userUid) {
    return (
      <Sidebar>
        <Outlet />
      </Sidebar>
    );
  }

  return <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
