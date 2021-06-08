import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './Page.module.scss';

import PseudoAudioBars from '../UI/PseudoAudioBars';
import BackgroundVideo from '../UI/BackgroundVideo';
import DateTime from '../UI/DateTime';
import { Facebook, Github, Instagram, Linkedin, Menu, Speaker, Mute } from '../UI/Icons';

const Page = (props) => {
    const [values, setValues] = useState({});
    const [play, setPlay] = useState(true);
    const router = useRouter();
    let title;

    const handleAudio = () => {
        setPlay((p) => !p);
    };

    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then((res) => res.json())
            .then((data) => {
                setValues(data);
            });
    }, []);

    if (router.pathname.includes('projects')) title = 'Projects';
    else if (router.pathname.includes('about')) title = 'About';
    else if (router.pathname.includes('frameworks')) title = 'Frameworks';
    else if (router.pathname.includes('contact')) title = 'Contact';
    else if (router.pathname.includes('skills')) title = 'Skills';
    else title = 'Portfolio';

    return (
        <>
            <Head>
                <title> Pritam Halder | {title} </title>
            </Head>

            <BackgroundVideo background={props.background} play={play} />
            <section className={styles.page}>
                <span className={styles.top}>
                    <DateTime />
                    <div></div>
                    <span>{props.page}</span>
                </span>
                <div className={styles.center}>
                    <span className={styles.left}>
                        <div></div>
                        <ul>
                            <li>
                                <a href='https://github.com/poseidon-code' target='_blank' rel='noopener noreferrer'>
                                    <Github />
                                </a>
                            </li>
                            <li>
                                <a href='https://linkedin.com/' target='_blank' rel='noopener noreferrer'>
                                    <Linkedin />
                                </a>
                            </li>
                            <li>
                                <a href='https://instagram.com/pritam.poseidon' target='_blank' rel='noopener noreferrer'>
                                    <Instagram />
                                </a>
                            </li>
                            <li>
                                <a href='https://facebook.com/pritamhalder0506' target='_blank' rel='noopener noreferrer'>
                                    <Facebook />
                                </a>
                            </li>
                            <li>
                                <button onClick={handleAudio}>{play ? <Speaker /> : <Mute />}</button>
                            </li>
                        </ul>
                    </span>
                    <div className={styles.content}>{props.children}</div>
                    <span className={styles.right}>
                        <button>
                            <Menu />
                        </button>
                        <div></div>
                        <a href='mailto:pritamhalder05062000@gmail.com'>&gt;PritamHalder</a>
                    </span>
                </div>
                <span className={styles.bottom}>
                    <PseudoAudioBars play={play} />
                    <div></div>
                    <span>
                        {values.latitude}, {values.longitude}
                        <br />
                        {/* {values.ip} */}
                        192.168.0.1
                        <br />
                        {values.country_name}
                    </span>
                </span>
            </section>
        </>
    );
};

export default Page;
