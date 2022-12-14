import './style.css'
import "@fontsource/abhaya-libre"
import HomePage from './layouts/HomePage/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import usersActions from './redux/actions/usersActions';



   
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