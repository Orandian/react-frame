import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteName from "./routes";

import { GlobalProps } from "@/App";
import TopPageScreen from "@/screens/user/TopPageScreen";

const UserRouterView = ({ globalProps }: { globalProps: GlobalProps }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RouteName.USER.TOP_PAGE}
          Component={() => <TopPageScreen {...globalProps} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default UserRouterView;
