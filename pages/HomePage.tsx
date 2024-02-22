import React, { useState } from 'react';
import VideoList from '../components/VideoList';
import VideoForm from '../components/VideoForm';

const HomePage: React.FC = () => {
    const [videos, setVideos] = useState<string[]>([]);
    const [newVideo, setNewVideo] = useState<string>('');

    const addVideo = () => {
        setVideos([...videos, newVideo]);
        setNewVideo('');
    };

    return (
        <div>
            <h1>Домашняя страница</h1>
            <VideoList videos={videos} />
            <VideoForm
                newVideo={newVideo}
                setNewVideo={setNewVideo}
                addVideo={addVideo}
            />
        </div>
    );
};

export default HomePage;
