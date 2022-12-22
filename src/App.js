import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import usersActions from './redux/actions/usersActions';
import { Route, Routes } from "react-router-dom";
import AutoToTop from './components/AutoToTop';
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
import ProductTables from "./components/ProductTables/ProductTables";
import ProductVases from "./components/ProductVases/ProductVases";
import ProductFrames from "./components/ProductFrames/ProductFrames";
import ProductCushions from "./components/ProductCushions/ProductCushions";
import ProductDiffuser from "./components/ProductDiffuser/ProductDiffuser";
import ProductMirrors from "./components/ProductsMirrors/ProductMirrors";
import ProductBlankets from './components/ProductBlankets/ProductBlankets';
import ProductChairs from './components/ProductChairs/ProductChairs';
import EditProfile from "./components/Profile/EditProfile"
import Payments from './components/Payments/Payments';
import Detail from './layouts/Detail/Detail';
import AllProducts from './components/AllProducts/AllProducts';
import MyFavs from './layouts/MyFavs';
import BackToTop from './components/BackToTopButton';
import AboutUs from './components/AboutUs/AboutUs';
import CommentsReported from './layouts/CommentsReported';


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
      <Header></Header>
      <AutoToTop></AutoToTop>
      <BackToTop></BackToTop>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/locals" element={<Locals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/login" element={<LoginLayout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/editproduct" element={<EditProduct />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/productCategory" element={<ProductCategory />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />
        <Route path="/productTables" element={<ProductTables />} />
        <Route path="/productVases" element={<ProductVases />} />
        <Route path="/productFrames" element={<ProductFrames />} />
        <Route path="/productCushions" element={<ProductCushions />} />
        <Route path="/productDiffuser" element={<ProductDiffuser />} />
        <Route path="/productMirrors" element={<ProductMirrors />} />
        <Route path="/productBlankets" element={<ProductBlankets />} />
        <Route path="/productChairs" element={<ProductChairs />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/myfavs" element={<MyFavs />} />
        <Route path="/forum/commentsreported" element={<CommentsReported />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App;