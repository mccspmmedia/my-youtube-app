import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { users } from '../data/users'; // Импортируем список пользователей

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Проверяем введенные учетные данные с данными пользователей
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            // Если пользователь найден, перенаправляем на защищенную страницу
            history.push('/private');
        } else {
            // Если пользователь не найден, выводим сообщение об ошибке
            alert('Неверное имя пользователя или пароль');
        }
    };

    return (
        <div>
            <h2>Вход</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Имя пользователя:</label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Пароль:</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default LoginPage;
