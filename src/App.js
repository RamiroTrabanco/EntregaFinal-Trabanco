import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
        <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:idCategory" element={<ItemListContainer />} />
                <Route path="/item/:idItem" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
