import { BiLogoGoLang } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import Reveal from "./Reveal";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiSqllite,
  DiGithubBadge,
  DiPython,
  DiJava,
} from "react-icons/di";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML5", icon: <DiHtml5 className="text-orange-600 mx-2" /> },
      { name: "CSS", icon: <DiCss3 className=" text-blue-600 mx-2" /> },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className=" text-yellow-400 mx-2" />,
      },
      { name: "React", icon: <DiReact className="text-blue-400 mx-2" /> },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="text-cyan-400 mx-2" />,
      },
    ],
  },
  {
    category: "Backend",
    technologies: [
      {
        name: "Node.js",
        icon: <DiNodejsSmall className="text-green-400 mx-2" />,
      },
      { name: "SQLite", icon: <DiSqllite className="text-green-400 mx-2" /> },
      {
        name: "GitHub",
        icon: <DiGithubBadge className="text-gray-600 mx-2" />,
      },
      { name: "Python", icon: <DiPython className="text-blue-400 mx-2" /> },
      { name: "Java", icon: <DiJava className="text-blue-400 mx-2" /> },
      { name: "Golang", icon: <BiLogoGoLang className="text-blue-700 mx-2" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Habilidades</h2>
        <p className=" text-justify mb-8 mx-auto max-w-[800px] ">
          Desenvolvedor com experiência em React, Python, SQL e Golang.
          Especialista em criação de interfaces dinâmicas, integração com APIs e
          otimização de desempenho. No back-end, foco em soluções escaláveis com
          bancos de dados SQL. Sempre em busca de inovação e aprendizado
          contínuo.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="to-blue-600 p-6 rounded-lg bg-blue-900/20 shadow-lg w-full md:w-1/2 animate-pulse"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
