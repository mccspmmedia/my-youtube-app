import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoList: React.FC = () => {
    const [videos, setVideos] = useState<any[]>([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(
                    'https://www.googleapis.com/youtube/v3/videos',
                    {
                        params: {
                            key: 'YOUR_YOUTUBE_API_KEY',
                            part: 'snippet',
                            chart: 'mostPopular',
                            maxResults: 10,
                        },
                    }
                );
                setVideos(response.data.items);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div>
            <h2>Список видеороликов</h2>
            <ul>
                {videos.map((video: any) => (
                    <li key={video.id}>{video.snippet.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default VideoList;
