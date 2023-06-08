import axios from "axios";

export const baseURL = "https://haloluxury.azurewebsites.net/api";

//PRODUCTS API
export const getProducts = async (req, res) => {
  return await axios
    .get(`${baseURL}/products/customers`, {params: req})
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getProductById = async (req, res) => {
  return await axios
    .get(`${baseURL}/products/${req}`)
    .then((response) => {
      return response.data.data;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getHistory = async (req, res) => {
  return await axios
    .get(`${baseURL}/orders/customers/${req}`)
    .then((response) => {
      return response.data.data;
    })
    .catch((err) => {
      return err.response;
    });
};