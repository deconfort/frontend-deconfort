import productReducer from "./productReducer";
import reactionsReducers from "./reactionsReducers";
import usersReducers from "./usersReducers";
import commentsReducers from "./commentsReducers";
import cartReducer from "./cartReducer";
import favoriteReducers from "./favoriteReducers";


const rootReducer = {
    user: usersReducers,
    products: productReducer,
    reactions: reactionsReducers,
    comment: commentsReducers,
    cart:cartReducer,
    favorites: favoriteReducers,
};

export default rootReducer;