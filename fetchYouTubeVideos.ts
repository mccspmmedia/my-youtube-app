import axios from 'axios';

// Функция для получения списка видеороликов с YouTube API
const fetchYouTubeVideos = async () => {
  try {
    // Здесь нужно указать ваш ключ API YouTube и параметры запроса
    const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        key: 'YOUR_API_KEY', // Замените 'YOUR_API_KEY' на ваш настоящий ключ API YouTube
        part: 'snippet',
        maxResults: 10, // Максимальное количество видеороликов для получения
        // Другие параметры запроса, если необходимо
      }
    });

    // Возвращаем только данные, содержащие видеоролики
    return response.data.items;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return []; // Возвращаем пустой массив в случае ошибки
  }
};

export default fetchYouTubeVideos;
