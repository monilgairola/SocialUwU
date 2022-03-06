type Action = {
    type: string;
    data?: any;
};

export const posts = (state = { postsData: null }, action: Action) => {
    switch (action.type) {
        case "GET_POSTS":
            return { ...state, postsData: action?.data };
        case "GET_TRENDING_POSTS":
            return { ...state, postsData: action?.data };
        case "GET_USER_POSTS":
            return { ...state, postsData: action?.data };
        default:
            return state;
    }
}