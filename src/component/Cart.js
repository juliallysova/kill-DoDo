import './Cart.css';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { deleteFromCart } from '../store/cartSlice';

function Cart  () {
    const pizza = useSelector((state) => state.cart.cartProducts)
    const dispatch = useDispatch()

    const handleRemovePizza = (id) => {
        const newProductData = pizza.filter((item)=> {
            if (item.id !== id) {
                return item
            }  
        })
        dispatch(deleteFromCart(newProductData))
    }

    const productVuew = pizza.map((data) => {
        return (
            <div className='cart-item' key={data.id}>
                <img src={data.image} alt={data.name} />
                <p>{data.description}</p>
                <p>${data.price}</p>
                <button onClick={()=>{handleRemovePizza(data.id)}}>Удалить</button>
            </div>
                );
        });

    return (
        <div className="cart-container">
            <h2>Корзина</h2>
            {pizza.length > 0 ? (
                <>
                    {productVuew}
                    <div className="cart-summary">
                        <p>Итоговая сумма: ${pizza.reduce((sum, item) => sum + item.price, 0)}</p>
                        <div className='asAgree'>
                            <input type="checkbox" id="agreement" />
                            <label htmlFor="agreement">Соглашаюсь с правилами</label>
                        </div>
                        <button>Заказать</button>
                    </div>
                </>
            ) : (
                <p>Ваша корзина пуста</p>
            )}
            <button><Link className="no-underline" to="/">Назад</Link></button> 
        </div>
    );
}

export default Cart