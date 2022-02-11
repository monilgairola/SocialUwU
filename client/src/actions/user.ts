import * as api from "../api/api";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

export const login =
  (databoi: any, navigate: any, setreloadboi: any) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.login(databoi);
    if (data.error) {
      toast.error(data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setreloadboi(false);
    } else {
      window.location.href = "/";
      dispatch({
        type: "LOGIN",
        data,
      });
      setreloadboi(false);
    }
  };

export const register =
  (databoi: any, navigate: any, setreloadboi: any) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.register(databoi);
    if (data.error) {
      toast.error(data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setreloadboi(false);
    } else {
      toast.success("User created now login :)", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      window.location.reload();
      setreloadboi(false);
    }
  };

export const get_user_by_id =
  (id: string, navigate: any) => async (dispatch: Dispatch) => {
    const { data } = await api.get_user_by_id(id);
    if (data.error) {
      localStorage.removeItem("token");
      window.location.href = "/auth";
    } else {
      dispatch({
        type: "GET_USER_BY_ID",
        data,
      });
    }
  };
