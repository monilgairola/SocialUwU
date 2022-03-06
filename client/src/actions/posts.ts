import * as api from "../api/api";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

export const getPosts = () => async (dispatch: Dispatch) => {
    const { data } = await api.get_posts()
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
    }
    else {
        dispatch({
            type: "GET_POSTS",
            data,
        })
    }
}

export const getTrendingPosts = () => async (dispatch: Dispatch) => {
    const { data } = await api.get_trending_posts()
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
    }
    else {
        dispatch({
            type: "GET_TRENDING_POSTS",
            data,
        })
    }
}


export const getUserPosts = (id: string) => async (dispatch: Dispatch) => {
    const { data } = await api.get_user_posts(id)
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
    }
    else {
        dispatch({
            type: "GET_USER_POSTS",
            data,
        })
    }
}

export const deletePost = (id: string, token: any) => async (dispatch: Dispatch) => {
    const { data } = await api.delete_post(id, token)
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
    }
    else {
        toast.success("Post deleted succesfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        dispatch({
            type: "DELETE_POST",
            data,
        })
    }
}

export const likePost = (id: string, token: any) => async (dispatch: Dispatch) => {
    const { data } = await api.like_post(id, token)
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
    }
    else {
        dispatch({
            type: "LIKE_POST",
            data,
        })
    }
}