import Image from 'next/image';
import styles from '../page.module.css';

export default function CaseStudyItem({ title, description, imageUrl, link, caseStudyExplanation }) {
  return (
    <div className={styles.caseStudyWrapper}>
      <div className={styles.caseStudyItem}>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.caseStudyLink}>
          <Image src={imageUrl} alt={title} width={600} height={400} className={styles.image} />
          <div className={styles.content}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </a>
      </div>

      <div className={styles.caseStudyExplanation}>
        <p>{caseStudyExplanation}</p>
      </div>
    </div>
  );
}