import React, { useState } from 'react';
import axios from 'axios';

const VideoForm: React.FC = () => {
  // Состояние для хранения введенного пользователем названия видеоролика
  const [videoTitle, setVideoTitle] = useState('');

  // Обработчик изменения в поле ввода названия видеоролика
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoTitle(event.target.value);
  };

  // Обработчик отправки формы
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Отправляем POST-запрос на сервер для добавления нового видеоролика
      await axios.post('YOUR_SERVER_URL', { title: videoTitle });
      console.log('Добавлен новый видеоролик:', videoTitle);
      // Очищаем поле ввода после успешной отправки формы
      setVideoTitle('');
    } catch (error) {
      console.error('Ошибка при добавлении видеоролика:', error);
    }
  };

  return (
    <div>
      <h2>Форма для добавления видеороликов</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Название видеоролика:
          <input
            type="text"
            value={videoTitle}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default VideoForm;
