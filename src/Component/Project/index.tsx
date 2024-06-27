import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  AwaitedReactNode,
  ReactPortal,
  Key,
} from "react";
import styles from "./styles.module.css";
import { Image } from "antd";
import zest from "../../../public/assets/zestWebsite.png";
const projects = [
  {
    title: "ZestHRM",
    description:
      "Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency.",
    tags: ["AWS Lambda", "API Gateway", "DynamoDB"],
    github: "https://github.com/your-username/serverless-voting-app", // Replace with your GitHub repository URL
    image: "https://vijayaudacious.github.io/My-Portfolio/zestWebsite.png", // Replace with the path to your project image
  },
  
  {
    title: "LearnCoding",
    description:
      "Developed an interactive chatbot application using Streamlit, OpenAI's GPT-3.5-turbo language model, and PyPDF2 for PDF text extraction, enabling users to ask context-based questions on uploaded PDFs and general queries.",
    tags: ["Streamlit", "PyPDF2", "LangChain"],
    github: "https://github.com/your-username/geniusbot", // Replace with your GitHub repository URL
    image: "https://cdn.dribbble.com/users/3404872/screenshots/17484211/media/4532bd49ab9a0a356bdb5fae0186abd6.png?resize=400x300&vertical=center", // Replace with the path to your project image
  },
  {
    title: "Notification-App ",
    description:
      "Developed a highly accurate credit risk classification model using XGBoost, achieving 100% precision, recall, and F1-scores for predicting loan defaults. Implemented rigorous data preprocessing, feature engineering, and hyperparameter tuning on imbalanced credit risk data, employing ensemble methods, cross-validation, and model interpretation techniques.",
    tags: ["XGBoost", "Pandas", "Matplotlib"],
    github: "https://github.com/yuvrajaudacious/Notification-Appp", // Replace with your GitHub repository URL
    image: "https://i.pinimg.com/736x/ff/c4/e4/ffc4e432e483c6fd6de0596dae51b968.jpg", // Replace with the path to your project image
  },
];

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectsheader}>
        <h1>My Projects</h1>
      </div>
      <div className={styles.projectsgrid}>
        {projects.map(
          (
            project: {
              github: string | undefined;
              title:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | Promise<AwaitedReactNode>
                | null
                | undefined;
              image: string | undefined;
              description:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined;
              tags: any[];
            },
            index: Key | null | undefined
          ) => (
            <div key={index} className={styles.projectcard}>
              <div className={styles.icons}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M10 2a1 1 0 00-1 1v1H6a4 4 0 00-4 4v11a4 4 0 004 4h12a4 4 0 004-4V8a4 4 0 00-4-4h-3V3a1 1 0 00-1-1h-6zm0 2h4v2h-4V4zM6 8h12a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V10a2 2 0 012-2z" />
                </svg>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 0a12 12 0 00-3.78 23.4c.6.1.82-.26.82-.58 0-.28-.01-1.02-.01-2-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.25 1.85 1.25 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.34-5.47-5.96 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.64-2.81 5.66-5.48 5.95.43.37.82 1.1.82 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.21.69.83.58A12 12 0 0012 0z" />
                  </svg>
                </a>
              </div>
              <h2>{project.title}</h2>
              <Image  height={200} src={project.image} className={styles.projectimage} />
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HomePage;
