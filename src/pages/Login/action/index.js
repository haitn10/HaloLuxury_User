import axios from "axios";
import { baseURL } from "../../../api";

export const SET_PROFILE_STATE = "SET_PROFILE_STATE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const LOG_OUT = "LOG_OUT";

export const setState = (state) => ({
  type: SET_PROFILE_STATE,
  state,
});

export const login = (credential) => async (dispatch, getState) => {
  const state = getState().auth;
  if (state.isLoggingIn) {
    return Promise.reject(new Error("You are being logged in.").message);
  }

  try {
    dispatch(setState({ isLoggingIn: true }));
    const { data: data } = await axios.post(
      `${baseURL}/customers/login`,
      credential
    );
    axios.defaults.headers = { Authorization: data.data.token };
    dispatch(setState({ isLoggingIn: false, profile: data.data }));
    sessionStorage.setItem("profile", JSON.stringify(data.data));
    return Promise.resolve(data);
  } catch (e) {
    dispatch(setState({ isLoggingIn: false }));
    const status = e.response.status ? e.response.status : e.message;
    return Promise.reject(status);
  }
};

export const register = (credential) => async (dispatch) => {
  try {
    dispatch(setState({ isLoggingIn: true }));
    const { data: data } = await axios.post(
      `${baseURL}/customers/register`,
      credential
    );
    dispatch(setState({ isLoggingIn: false }));
    return Promise.resolve(data);
  } catch (e) {
    const status = e.response.status ? e.response.status : e.message;
    return Promise.reject(status);
  }
};

export const logOut = () => ({
  type: LOG_OUT,
});
