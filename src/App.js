
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
import { useDispatch, useSelector } from 'react-redux';
import usersActions from './redux/actions/usersActions';
import { useEffect } from 'react';


   
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
 {/*    <Header></Header>
    <Faqs></Faqs>
      <Locals></Locals>
      <Contact></Contact>
      <LoginLayout></LoginLayout>
      <Header></Header> */}
      {/* <Contact></Contact> */}
      {/* <LoginLayout></LoginLayout> */}
      {/* <Register></Register>  */}
     {/*  <CreateProduct></CreateProduct>
      <EditProduct></EditProduct>
      <Forum /> */}
      <div className='app'>
      <HomePage/>
    </div> 
     {/*  <Footer></Footer> */}
    </>

  );
}

export default App;
