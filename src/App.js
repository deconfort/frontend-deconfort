
import './style.css'
import Header from './layouts/Header'
import "./style.css";
import Footer from "./components/footer/Footer";
import Contact from "./components/Contact/Contact";
import LoginForm  from './components/Login/LoginForm';


function App() {
  return (
    <>

    <Header></Header>
      <h1>Hello React</h1>
      <Contact></Contact>
      <LoginForm></LoginForm>
      <Footer></Footer>
    </>
  );
}

export default App;
