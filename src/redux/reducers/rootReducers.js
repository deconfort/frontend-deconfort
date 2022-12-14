import productReducer from "./productReducer";
import usersReducers from "./usersReducers";


const rootReducer = {
    user: usersReducers,
    products: productReducer,


};

export default rootReducer;