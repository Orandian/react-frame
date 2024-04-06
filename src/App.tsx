import AdminRouterView from "@/navigations/AdminRouterView";
import { Dispatch, SetStateAction, useState } from "react";
import UserRouterView from "@/navigations/UserRouterView";
import mutations, { MutationType } from "@/networks/mutations";
export type GlobalProps = {
  setIsAdmin: Dispatch<SetStateAction<boolean>>;
  mutations: MutationType;
};

const App = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(
    localStorage.getItem("isAdmin") === "1"
  );

  const globalProps: GlobalProps = {
    mutations,
    setIsAdmin,
  };

  return isAdmin ? (
    <AdminRouterView globalProps={globalProps} />
  ) : (
    <UserRouterView globalProps={globalProps} />
  );
};

export default App;
