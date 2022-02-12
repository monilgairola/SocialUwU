import * as api from "../api/api";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

type Theme = "dark" | "light";
export const getProfile = (id: string) => async (dispatch: Dispatch) => {
  const { data } = await api.get_user_by_id(id);
  if (data.error) {
    toast.error("No user found", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: localStorage.getItem("theme") as Theme,
    });
  } else {
    dispatch({
      type: "GET_PROFILE",
      data,
    });
  }
};
