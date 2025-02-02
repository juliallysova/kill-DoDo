import './App.css';
import pizzas from './pizzas';
import pizzalogo from './img/icons/iconspizza.png';
import mainpizza from './img/pizza.jpg';
import Card from './component/Card';
import iconSearch from './img/icons/icon-search.svg';
import iconCart from './img/icons/icon-bag.png';
import AuthModal from './component/AuthModal';
import { useDispatch,useSelector } from 'react-redux';
import { openAuthModal,logOut} from './store/authSlice';
import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { setPizzas } from './store/cardSlice';

function App() {
  const { token, userName} = useSelector((state) => state.authModal);
  const dispatch = useDispatch();
  const pizzasItems = useSelector((state) => state.card.pizzas)
  const cartCount = useSelector((state) => state.cart.cartProducts)
  const navigate = useNavigate()
  const openModal = () => dispatch(openAuthModal());

  useEffect (()=> {
    dispatch(setPizzas(pizzas))
  },[])

  const rederect =() => {
    if (!token) {
      openModal()
    } else {
      navigate('cart')
    }
  }
  return (
    <div className="main">
      <header>
        <div className='logo'>
          <img src={pizzalogo} alt="logo" />
          <p className='logoText'>Pizza Time</p>
        </div>
        <div className='menu'>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Promo</li>
            <li><img src={iconSearch} alt="search" /></li>
            <li className='cart'>
              <p>{cartCount.length}</p>
              <div onClick={rederect}><img src={iconCart} alt="cart" /></div>
            </li>
          </ul>
          {token ? <p onClick={()=> {dispatch(logOut())}}>{userName}</p> : <button className='menuBtn' onClick={openModal}>SING IN</button>}
        </div>
      </header>
      <div className="first-section">
        <div className="discription">
          <h1>Friday Pizza!</h1>
          <p>Time to enjoy delecious pizza.</p>
        </div>
        <div className="section-image">
          <img src={mainpizza} alt="pizza-img" />
        </div>
      </div>
      <div className="second-section">
      <h2>Reccomended menu</h2>
        <div className="cards">
        {pizzasItems.map((pizza) => {
          return (
            <Card
            key={pizza.id}
            {...pizza}
          />
          )
        })}
        </div>
      </div>
      <AuthModal/>
    </div>
  );
}

export default App;
