import productReducer from "./productReducer";
import reactionsReducers from "./reactionsReducers";
import usersReducers from "./usersReducers";
import commentsReducers from "./commentsReducers";
import cartReducer from "./cartReducer";

const rootReducer = {
    user: usersReducers,
    products: productReducer,
    reactions: reactionsReducers,
    comment: commentsReducers,
    cart:cartReducer



};

export default rootReducer;