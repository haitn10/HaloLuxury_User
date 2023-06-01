import axios from "axios";

export const baseURL = "https://haloluxury.azurewebsites.net/api";

//PRODUCTS API
export const getProducts = async (req, res) => {
  return await axios
    .get(`${baseURL}/products/customers`, {
      params: req,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response;
    });
};
