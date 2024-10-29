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
      caseStudyExplanation: 'This project is a redesign of the ASU Class Search website. The goal is to make the website more user-friendly and intuitive. The redesign included a new layout, color scheme, and navigation. The new design is tested with users to ensure that it met their needs and expectations.',
    },
    {
      title: 'Rent it Up',
      description: 'Renting Made Easy: A Mobile App',
      imageUrl: '/images/rent-it-up.png',
      link: 'https://www.figma.com/design/KQh6JauuwEhbltyjBMRtn8/Wireframe?node-id=0-1&node-type=canvas&t=v4gksEYhorqoNd5l-0',
      caseStudyExplanation: 'This project is a mobile app designed to make renting easier for users. The app included features such as a search function, a map view, and a chat function. The app is designed to be user-friendly and intuitive, with a focus on simplicity and ease of use.',
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
              caseStudyExplanation={caseStudy.caseStudyExplanation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}