import React from "react";
import styles from "../Info.module.css";
const FactoryInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>Factory Development (Outsourcing development)</h4>
      </div>
      <p>
        We help our clients not only define strategies – but also bring to
        market products at scale.
        <br /> <br />
        WKB’s dedicated development teams build custom web and mobile apps with
        a focus on speed to market. <br />
        <br />
        We are able to deliver your digital product MVP in as little as 2-6
        month employing the lean startup approach and agile software
        development.
      </p>
      <h5>Frontend Development</h5>
      <p>
        We use the most popular frontend frameworks like React.js, Vue.js, and
        Angular that enable us to create the surface layer of your product.
      </p>
      <h5>Backend Development</h5>
      <p>
        We use server-side technologies like Python, Ruby on Rails, and Node.js
        for prototyping and development, producing fast and scalable web apps.
      </p>
      <h5>Full Stack Development</h5>
      <p>
        We deliver end-to-end web development, combining frontend and backend
        solutions and other technologies necessary to make your product a
        success.
      </p>
      <div className={styles.subtitle}>
        <h4>Our Workflow</h4>
      </div>

      <ul>
        <li>Project Initiation</li>
        <li>Requirements Analysis</li>
        <li>Focus on Planning</li>
        <li>Prototyping and Design</li>
        <li>
          Development: What does acceptance criteria have to do with app
          development?
        </li>
        <li>Development and Testing with Scrum: What are sprints?</li>
        <li>Deployment and Maintenance</li>
      </ul>
    </div>
  );
};

export default FactoryInfo;
