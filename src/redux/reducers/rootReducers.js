import productReducer from "./productReducer";
import reactionsReducers from "./reactionsReducers";
import usersReducers from "./usersReducers";
import commentsReducers from "./commentsReducers";
const rootReducer = {
    user: usersReducers,
    products: productReducer,
    reactions: reactionsReducers,
    comment: commentsReducers,


};

export default rootReducer;