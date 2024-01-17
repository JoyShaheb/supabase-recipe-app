import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Sidebar from "../../components/SideBar/Sidebar";
import ProfileTab from "../../components/Tabs/ProfileTab";

const DashboardProtectedRoutes = () => {
  const userUid = useSelector((state: RootState) => state.user.uid);

  if (userUid) {
    return (
      <Sidebar>
        <ProfileTab />
        <Outlet />
      </Sidebar>
    );
  }

  return <Navigate to="/login" replace />;
};

export default DashboardProtectedRoutes;
