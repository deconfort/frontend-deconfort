import "./style.css";
import Header from "./layouts/Header";
import LoginLayout from "./layouts/LoginLayout";
import Footer from "./layouts/Footer";
import Register from "./layouts/Register";
import Contact from "./layouts/Contact";
import Forum from "./components/foro/Forum";
import CreateProduct from "./layouts/CreateProduct";
import EditProduct from "./layouts/EditProduct";


function App() {
  return (
    <>
      <Header></Header>
      {/* <Contact></Contact> */}
      {/* <LoginLayout></LoginLayout> */}
      {/* <Register></Register>  */}
      {/* <CreateProduct></CreateProduct> */}
      {/* <EditProduct></EditProduct> */}
      <Forum />
      <Footer></Footer>
    </>
  );
}

export default App;
