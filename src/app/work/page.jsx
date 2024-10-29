import Header from '../components/Header';
import CaseStudyItem from '../components/CaseStudyItem';
import styles from '../page.module.css';

export default function Work() {
  const caseStudies = [
    {
      title: 'School Me',
      description: 'Enhanced ASU Class Search: Intuitive Redesign',
      imageUrl: '/images/class-search.png',
      link: '/files/class-search.pdf',
    },
    {
      title: 'Rent it Up',
      description: 'Renting Made Easy: A Mobile App',
      imageUrl: '/images/rent-it-up.png',
      link: 'https://www.figma.com/design/KQh6JauuwEhbltyjBMRtn8/Wireframe?node-id=0-1&node-type=canvas&t=v4gksEYhorqoNd5l-0',
    },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.workContent}>
        <h1>Work</h1>
        <div className={styles.caseStudies}>
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyItem
              key={index}
              title={caseStudy.title}
              description={caseStudy.description}
              imageUrl={caseStudy.imageUrl}
              link={caseStudy.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}