import ApiService from "@/networks/services";

type GetProductRes = {
  status: string;
  message: string;
  code: number;
  data?: Array<{name: string}>;
  errors?: string;
};

const get = (): Promise<GetProductRes> => {
  return new Promise((resolve, reject) => {
    ApiService.pub
      .get(`/product`)
      .then((ans) => {
        resolve(ans.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default get;
