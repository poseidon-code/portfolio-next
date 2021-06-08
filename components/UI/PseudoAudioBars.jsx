import styles from './UI.module.scss';

const PseudoAudioBars = ({ play }) => (
    <div className={play ? styles.bars : `${styles.bars} ${styles.pause}`}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
    </div>
);

export default PseudoAudioBars;
