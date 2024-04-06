import { GlobalProps } from "@/App";
import { useEffect } from "react";

const TopPageScreen = ({ mutations }: GlobalProps) => {

  const getProducts = () => {
    mutations.pub.product
      .get()
      .then((ans) => {
        if (ans.data) {
          console.log(ans.data);
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <p>user</p>
    </div>
  );
};

export default TopPageScreen;
