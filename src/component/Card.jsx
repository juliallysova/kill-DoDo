import '../component/card.css';
import { useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from '../store/cartSlice';
import { useSelector } from 'react-redux';
import { setPizzas } from '../store/cardSlice';

function Card (pizzas) {
    const dispatch = useDispatch()
    const pizzasItems = useSelector((state) => state.card.pizzas)
    const pizza = useSelector((state) => state.cart.cartProducts)

    const handleAddToCart = () => {
        let newPizzas = {...pizzas, inCart: true}
        dispatch(addToCart(newPizzas))
        dispatch(setPizzas(pizzasItems.map(item => {
            return item.id === newPizzas.id ? newPizzas : item
        })))
    }

    const handleDeleteFromCart = () => {        
        const newCartData = pizza.filter((item)=> {
            if (item.id !== pizzas.id) {
                return item
            }  
        })
        dispatch(deleteFromCart(newCartData))
        dispatch(setPizzas(pizzasItems.map(item => {
            return item.id === pizzas.id ? {...pizzas, inCart:false} : item
        })))
    }
    return (
    <div>
        <div className='card-item'>
            <img src={pizzas.image} alt={pizzas.name} />
            <h2>{pizzas.name}</h2>
            <p className='card-desc'>{pizzas.description}</p>
            <p>${pizzas.price}</p>
            { !pizzas.inCart  ? <button className='menuBtn' onClick={handleAddToCart}>ADD TO CART</button> : <button className='menuBtn' onClick={handleDeleteFromCart}>DELETE</button>  }
        </div>
    </div>
    );
}
export default Card