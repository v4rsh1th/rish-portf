import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";

export default function Page() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.bigName}>
          <h2>Rishika Reddy Valluru</h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.sparkle}>
            <path d="M12 2l1.09 3.36L16 6l-2.91 1.64L12 11l-1.09-3.36L8 6l2.91-1.64L12 2zm0 20l1.09-3.36L16 18l-2.91-1.64L12 13l-1.09 3.36L8 18l2.91 1.64L12 22zm10-10l-3.36-1.09L18 8l-1.64 2.91L13 12l3.36 1.09L18 16l1.64-2.91L22 12zm-20 0l3.36 1.09L6 16l1.64-2.91L11 12 7.64 10.91 6 8 4.36 10.91 2 12z" />
          </svg>
          <p className={styles.jobTitle}>UI/UX Designer</p>

          <p className={styles.socialMediaConnect}>
            Connect with me on:
          </p>
        </section>

        <section>
          <Image
            src="/images/rishika.jpg"
            alt="Rishika's profile picture"
            layout="responsive"
            width={400}
            height={400}
            className={styles.profileImage}
          />
        </section>
      </main>
    </div >
  );
}