import Header from '../components/Header';
import ResumeButton from '../components/ResumeButton';
import styles from '../page.module.css';

export default function About() {
  const education = [
    {
      date: '2023 - 2025',
      degree: "Master's in Engineering and Industrial Management",
      institution: 'Arizona State University',
    },
    {
      date: '2017 - 2021',
      degree: "Bachelor's in Electronics and Communication Engineering",
      institution: 'MLR Institute of Technology',
    },
  ];

  const experience = [
    {
      date: '2021 - 2023',
      title: 'Programmer Analyst, Project Management',
      company: 'Cognizant Technology Solutions',
    },
    {
      date: '2020 - 2021',
      title: 'Content Marketing Intern',
      company: 'GreyCampus',
    },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.aboutContent}>
        <h1 className={styles.h1}>About</h1>
        <p>Hi! I am a 24 year old designer from Arizona with experience in marketing and social media management for over 3 years with a Master's degree in Engineering and Industrial Management.</p> <br />
        <p>I have a passion for design, art, management and lifestyle and a keen eye for capturing and creating compelling and aesthetically pleasing high quality content that is authentic and connects with your target audience to boost engagement and drive conversions.</p>

        <div className={styles.experienceEducation}>
          <h2 className={styles.educationHeading}>Education</h2>
          <div className={styles.timeline}>
            {education.map((edu, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDate}>{edu.date}</div>
                <div className={styles.timelineContent}>
                  <h3>{edu.degree}</h3>
                  <p>{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className={styles.experienceHeading}>Experience</h2>
          <div className={styles.timeline}>
            {experience.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDate}>{exp.date}</div>
                <div className={styles.timelineContent}>
                  <h3>{exp.title}</h3>
                  <p>{exp.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <span className={styles.resumeSection}>
          <p>
            Here's my resume: &nbsp;
            <ResumeButton />
          </p>
        </span>
      </div>
    </div>
  );
}