
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


   
function App() {
  return (
    <>
     <div className='app'>
      <HomePage/>
    </div>
    <Header></Header>
    <Faqs></Faqs>
      <Locals></Locals>
      <Contact></Contact>
      <LoginLayout></LoginLayout>
      <Header></Header>
      {/* <Contact></Contact> */}
      {/* <LoginLayout></LoginLayout> */}
      {/* <Register></Register>  */}
      <CreateProduct></CreateProduct>
      <EditProduct></EditProduct>
      <Forum />
      <Footer></Footer>
    </>

  );
}

export default App;
