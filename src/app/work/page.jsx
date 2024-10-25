import Header from '../components/Header';
import styles from '../page.module.css';

export default function Work() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.workContent}>
                <h1>Work</h1>
                <p>Gotta put all the work you did in here.</p>
            </div>
        </div>
    );
}