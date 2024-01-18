import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  DetailsPage,
  ErrorPage,
  ForgotPassword,
  Home,
  Login,
  Products,
  Profile,
  ResetPassword,
  Signup,
} from "./pages";
import {
  AuthenticationRoutes,
  DashboardProtectedRoutes,
  ProtectedRoutes,
} from "./pages/utils";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthenticationRoutes />}>
          {/* General pages */}
          <Route path="/" element={<Home />} />
          {/* Authentication pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          {/* <Route path="/User" element={<Profile />} /> */}
          <Route path="/products" element={<Products />} />
        </Route>

        <Route element={<DashboardProtectedRoutes />}>
          <Route path="/User" element={<Profile />} />
          <Route path="/details-page" element={<DetailsPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
