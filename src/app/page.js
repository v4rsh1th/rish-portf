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
        </section>
        <section>
          <Image
            src="/images/rishika.jpg"
            alt="Your profile"
            layout="responsive"
            width={400}
            height={400}
            className={styles.profileImage}
          />
        </section>
      </main>
    </div>
  );
}