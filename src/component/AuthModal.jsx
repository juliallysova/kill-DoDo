import '../component/authmodal.css';
import {useDispatch, useSelector} from 'react-redux';
import {closeAuthModal, setAuthData} from '../store/authSlice';
import { useState } from 'react';

function AuthModal () {
    const [email,setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const dispatch = useDispatch ();
    const {isAuthModalOpen} = useSelector (state => state.authModal);

    const handleClose = () => {
        dispatch (closeAuthModal ());
    };

    const handleChange = () => {
    if ( password.length < 3) {
        alert ('Пожалуйста, подтвердите правильность данных.');
        return;
    }
    const myHeaders = new Headers ();
    myHeaders.append ('Content-Type', 'application/json');

    const raw = JSON.stringify ({
        username: email,
        password: password,
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
    };

    fetch ('http://localhost:8080/login', requestOptions)
        .then (response => response.json())
        .then ((data) => {
            dispatch(setAuthData(data))
            handleClose()
        })
        .catch (error => console.error (error));
    };

    if (!isAuthModalOpen) return false;

return (
    <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-content" onClick={e => e.stopPropagation ()}>
        <h2>Вход на сайт</h2>
        <form>
            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Введите ваш email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input
                type="password"
                id="password"
                placeholder="Введите ваш пароль"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />
            </div>
        </form>
        <div className="modal-btn">
            <button
            type="submit"
            className="modal-submit-btn"
            onClick={handleChange}
            >
            Войти
            </button>
            <button className="modal-close-btn" onClick={handleClose}>
            Закрыть
            </button>
        </div>
        </div>
    </div>
);
}
export default AuthModal;
