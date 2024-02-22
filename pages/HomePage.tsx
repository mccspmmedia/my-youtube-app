import React, { useState } from 'react';
import VideoList from './VideoList';
import VideoForm from './VideoForm';

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
