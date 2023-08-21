import Home from './components/Home_Page/Home_Page.jsx'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import ShoppingPage from './components/Shopping_Page/ShoppingPage.jsx';
import Item from './components/Item_Page/ItemPage.jsx';
import FavouritesPage from './components/Favourites_Page/FavouritesPage.jsx'

function App() {

  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<ShoppingPage />} />
          <Route path="/shop/items/:id" element={<Item />} />
          <Route path='/favourites' element={<FavouritesPage />} />
        </Routes>
      </div>
    </>
    
  );
}

export default App;