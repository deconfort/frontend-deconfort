
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


   
function App() {
  return (
    <>
 <Header></Header>
<Routes>
      <Route path="/faqs" element={<Faqs/>}/>
      <Route path="/locals" element={<Locals/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/forum" element={<Forum/>}/>
      <Route path="/login" element={<LoginLayout/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/createproduct" element={<CreateProduct/>}/>
      <Route path="/editproduct" element={<EditProduct/>}/>
      {/* App con todas las rutas */}
      {/* <div className='app'>
      <HomePage/>
    </div>  */}
     </Routes>
    <Footer></Footer>
    </>

  );
}

export default App;
