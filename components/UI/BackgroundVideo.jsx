import { useEffect, useRef } from 'react';
import styles from './UI.module.scss';

const BackgroundVideo = (props) => {
    const audioRef = useRef();

    useEffect(() => {
        if (props.play === true) audioRef.current.play();
        else audioRef.current.pause();
    }, [props.play]);

    return (
        <>
            <video className={styles.background_video} autoPlay muted loop>
                <source src={props.background} type='video/webm' />
            </video>
            <audio ref={audioRef} autoPlay loop>
                <source src='backgrounds/bgm.mp3' type='audio/mpeg' />
            </audio>
        </>
    );
};

export default BackgroundVideo;
