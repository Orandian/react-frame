import HomeScreen from "@/screens/admin/home/HomeScreen";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteName from "./routes";
import { GlobalProps } from "@/App";

const AdminRouterView = ({ globalProps }: { globalProps: GlobalProps }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RouteName.ADMIN.HOME}
          Component={() => <HomeScreen {...globalProps} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default AdminRouterView;
