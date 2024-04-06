import ApiService from "@/networks/services";

type GetProductRes = {
  status: string;
  message: string;
  code: number;
  data?: Array<{ name: string }>;
  errors?: string;
};

const get = ({
  category = "",
  subCategory = "",
  publicStatus = 2,
  search = "",
}: {
  category: string;
  subCategory: string;
  publicStatus: number;
  search: string;
}): Promise<GetProductRes> => {
  return new Promise((resolve, reject) => {
    ApiService.admin
      .get(
        `/product?category=${category}&sub_category=${subCategory}&public=${publicStatus}&search=${search}`
      )
      .then((ans) => {
        //console.log(ans.data);
        resolve(ans.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default get;
