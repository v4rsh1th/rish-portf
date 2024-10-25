import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Rishika Reddy Valluru</h1>
        <p>UI/UX portfolio</p>
        <p>@yourusername</p>
      </header>

      <main className={styles.main}>
        <section className={styles.whyUGC}>
          <h2>Why UGC?</h2>
          <p>User Generated Content (UGC) is relatable, authentic, brand specific content created by consumers.</p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3>92%</h3>
              <p>of customers trust the reviews shared by people rather than advertisements</p>
            </div>
            <div className={styles.stat}>
              <h3>86%</h3>
              <p>of companies incorporate UGC in their marketing strategy as it is effective content that helps build trust and authenticity</p>
            </div>
            <div className={styles.stat}>
              <h3>79%</h3>
              <p>of people say UGC highly impacts their purchasing decisions</p>
            </div>
            <div className={styles.stat}>
              <h3>28%</h3>
              <p>higher engagement rate with UGC posts on social media than branded content</p>
            </div>
          </div>
        </section>

        <section className={styles.about}>
          <h2>About me</h2>
          <p>Hi! I am a 24 year old UGC content creator from Sydney with experience in marketing and social media management for over 3 years with a Bachelor's degree in Business and Marketing.</p>
          <p>I have a passion for beauty, fashion, interior, travel and lifestyle and a keen eye for capturing and creating compelling and aesthetically pleasing high quality content that is authentic and connects with your target audience to boost engagement and drive conversions.</p>
          <Image
            src="/your-image.jpg"
            alt="Your profile"
            width={300}
            height={300}
            className={styles.profileImage}
          />
        </section>
      </main>
    </div>
  );
}