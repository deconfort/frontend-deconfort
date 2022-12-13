import "./style.css";
import Header from "./layouts/Header";
import "./style.css";
import LoginLayout from "./layouts/LoginLayout";
import Footer from "./layouts/Footer";
import Register from "./layouts/Register";
import Contact from "./layouts/Contact";
import Forum from "./components/foro/Forum";

function App() {
  return (
    <>
      <Header></Header>
      {/* <Contact></Contact> */}
      {/* <LoginLayout></LoginLayout> */}
      {/* <Register></Register> */}
      <Forum />
      <Footer></Footer>
    </>
  );
}

export default App;
