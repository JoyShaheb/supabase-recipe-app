import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfileTab = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname;
  return (
    <>
      <Tabs value={currentPage} className="w-[400px]">
        <TabsList>
          <TabsTrigger onClick={() => navigate("/User")} value="/User">
            Profile
          </TabsTrigger>
          <TabsTrigger
            onClick={() => navigate("/details-page")}
            value="/details-page"
          >
            Details
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
};

export default ProfileTab;
