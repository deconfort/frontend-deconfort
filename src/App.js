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
    <div className='app'>
      <HomePage />
    </div>
  );
}

export default App;