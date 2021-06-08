import { useEffect, useState } from 'react';
import styles from './UI.module.scss';

const DateTime = () => {
    const today = new Date();
    const [date, setDate] = useState({ date: today.toDateString(), time: today.toLocaleTimeString() });

    useEffect(() => {
        setTimeout(() => {
            setDate({
                date: today.toDateString(),
                time: today.toLocaleTimeString(),
            });
        }, 1000);
    }, [today]);

    return (
        <span className={styles.date_time} suppressHydrationWarning={true}>
            {date.date}
            <br />
            {date.time}
        </span>
    );
};

export default DateTime;
