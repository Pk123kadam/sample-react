import React, { useRef, useState } from 'react';

export const Video = () => {
    const videoRefs = useRef([]);
    console.log(videoRefs.current)
    const [currentPlaying, setCurrentPlaying] = useState(null);
    const src = [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    ];

    const playVideo = (index) => {
        if (currentPlaying !== null && currentPlaying !== index) {
            videoRefs.current[currentPlaying].pause();
        }
        setCurrentPlaying(index);
        videoRefs.current[index].play();
    };

    const pauseVideo = (index) => {
        // setCurrentPlaying(null);
        videoRefs.current[index].pause();
    };

    return (
        <div>
            {
                src.map((e, index) => (
                    <div key={index}>
                        <video width="320" height="240" ref={
                            (el) => {
                                videoRefs.current[index] = el
                            }
                        }>
                            <source src={e} type="video/mp4" />
                        </video>
                        <div>
                            <button onClick={() => playVideo(index)}>Play</button>
                            <button onClick={() => pauseVideo(index)}>Pause</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
