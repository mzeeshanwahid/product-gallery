import axios from "axios";

const axiosDefaultConfig = {
  timeout: 60000,
};

export const getProducts = async (pageNo: number, params: string) => {
  try {
    const pageNoToConsider = params && params !== "" ? 1 : pageNo;

    let url = `${
      import.meta.env.VITE_REST_API_URL
    }/products?pageSize=12&pageNo=${pageNoToConsider}`;

    if (params && params !== "") {
      url = `${url}&${params}`;
    }

    // console.log(`Calling API: ${url}`)
    const result = await axios.get(url, axiosDefaultConfig);

    if (result.status !== 200) {
      return null;
    }

    return result.data;
  } catch (err) {
    console.log("Network Error");
    return null;
  }
};

