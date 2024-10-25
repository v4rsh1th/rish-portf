import Header from '../components/Header';
import styles from '../page.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.aboutContent}>
                <h1 className={styles.h1}>About</h1>
                <p>Hi! I am a 24 year old designer from Arizona with experience in marketing and social media management for over 3 years with a Master's degree in Engineering and Industrial Management.</p> <br />
                <p>I have a passion for design, art, management and lifestyle and a keen eye for capturing and creating compelling and aesthetically pleasing high quality content that is authentic and connects with your target audience to boost engagement and drive conversions.</p>
            </div>
        </div>
    );
}