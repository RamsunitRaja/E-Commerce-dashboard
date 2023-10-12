import './App.css';
import Nav from './components/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent'
import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateComponent';
import Profile from './components/Profile';
import Stats from './components/CustomerAnalytics';
function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Nav />
      <Routes>
 

     
      {/* private components which are only visible when user is signed in */}
      <Route element={<PrivateComponent/>} >
      <Route path='/' element={<ProductList/>} />
      <Route path='/add' element={<AddProduct/>} />
      <Route path='/update/:id' element={<UpdateProduct/>} />
      <Route path='/logout' element={<h1>logout component</h1>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/stats' element={<Stats/>} />
      </Route>
       {/* private components which are only visible when user is signed in */}



      {/* NOT private components which are always visible*/}
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>} />
      {/* NOT private components which are always visible*/}


      </Routes> 
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;