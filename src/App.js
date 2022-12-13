
import './style.css'
import Header from './layouts/Header'
import "./style.css";
import Contact from "./components/Contact/Contact";
import LoginLayout  from './layouts/LoginLayout';
import Footer from './layouts/Footer';
import Register from './layouts/Register';
/* import Contact from './layouts/Contact'; */


function App() {
  return (
    <>

    <Header></Header>
      <h1>Hello React</h1>
      <Contact></Contact>
      <LoginLayout></LoginLayout>
      {/* <Contact></Contact> */}
      <Register></Register>
      <Footer></Footer>
    </>
  );
}

export default App;
