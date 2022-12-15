import './style.css'
import "@fontsource/abhaya-libre"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import usersActions from './redux/actions/usersActions';
import { Route, Routes } from "react-router-dom";
import './style.css'
import "@fontsource/abhaya-libre"
import HomePage from './layouts/HomePage/HomePage';
import Header from "./layouts/Header";
import LoginLayout from "./layouts/LoginLayout";
import Footer from "./layouts/Footer";
import Register from "./layouts/Register";
import Contact from "./layouts/Contact";
import Forum from "./components/foro/Forum";
import Locals from "./components/Locals/Locals";
import Faqs from "./components/faqs/Faqs";
import CreateProduct from "./layouts/CreateProduct";
import EditProduct from "./layouts/EditProduct";
import ProductCategory from './components/ProductCategory/ProductCategory';
import Profile from './components/Profile/Profile';
import EditProfile from "./components/Profile/EditProfile"
import Payments from './components/Payments/Payments';
import Detail from './layouts/Detail/Detail';
import AllProducts from './components/AllProducts/AllProducts';

   
function App() {
  let user = useSelector((store) => store.user);
  let dispatch = useDispatch();
  let { reEnter } = usersActions;

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      dispatch(reEnter(token.token.user));
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
    {/* Este es el commit que si funciona, funciona de verdad */}
 <Header></Header>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/allproducts" element={<AllProducts/>}/>
      <Route path="/faqs" element={<Faqs/>}/>
      <Route path="/locals" element={<Locals/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/forum" element={<Forum/>}/>
      <Route path="/login" element={<LoginLayout/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/editprofile" element={<EditProfile/>}/>
      <Route path="/createproduct" element={<CreateProduct/>}/>
      <Route path="/editproduct" element={<EditProduct/>}/>
      <Route path="/payments" element={<Payments/>}/>
      <Route path="/productCategory" element={<ProductCategory/>}/>
      <Route path="/editproduct/:id" element={<EditProduct/>}/>
      <Route path="/detail" element={<Detail/>}/>
     </Routes>
    <Footer></Footer>
    </>
    )
}

export default App;