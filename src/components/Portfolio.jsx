import projeto1 from "../assets/projeto1.png";
import projeto2 from "../assets/projeto2.png";
import projeto3 from "../assets/projeto3.png";
// import projeto3 from "../assets/projeto2.png";
// import projeto4 from "../assets/projeto2.png";
// import projeto5 from "../assets/projeto2.png";
// import projeto6 from "../assets/projeto2.png";
import { FaGithub } from "react-icons/fa";

import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiPython,
  DiReact,
} from "react-icons/di";
import Reveal from "./Reveal";
const projects = [
  {
    img: projeto1,
    title: "Projeto #1",
    description: "Lista de Tarefas Simples, feita 100% em Python",
    links: {
      site: "http://listadetarefas.streamlit.app/",
      github: "https://github.com/MatheusLucas01/ListaDeTarefas",
      linguagens_projeto1: {
        DiPython,
      },

    },
  },
  {
    img: projeto2,
    title: "Projeto #2",
    description:
      "DevLinks, landing page para apresentar os links das minhas redes de contato",
    links: {
    site: "https://matheuslucas01.github.io/DevLinks/",
    github: "https://github.com/MatheusLucas01/DevLinks",
    linguagens_projeto2: {
        DiHtml5,
        DiCss3,
        DiJavascript1,
      }
    },
  },
   {
    img: projeto3,
    title: "Projeto #3",
    description: "Tela de Login, feita com React e CSS",
    links: {
    site: "https://tela-login-azure.vercel.app/",
    github: "https://github.com/MatheusLucas01/Tela_Login",
    linguagens_projeto3: {
        DiReact,
        DiCss3,
      }
    },
   },
  // {
  //   img: projeto3,
  //   title: "Projeto 1",
  //   desciption: "Lista de Tarefas Simples, feita 100% em Python",
  //   links: {
  //     site: "https://matheuslucas01.github.io/DevLinks/",
  //     github: "https://github.com/MatheusLucas01/DevLinks",
  //   },
  // },
  // {
  //   img: projeto4,
  //   title: "Projeto 1",
  //   desciption: "Lista de Tarefas Simples, feita 100% em Python",
  //   links: {
  //     site: "https://matheuslucas01.github.io/DevLinks/",
  //     github: "https://github.com/MatheusLucas01/DevLinks",
  //   },
  // },
  // {
  //   img: projeto5,
  //   title: "Projeto 1",
  //   desciption: "Lista de Tarefas Simples, feita 100% em Python",
  //   links: {
  //     site: "https://matheuslucas01.github.io/DevLinks/",
  //     github: "https://github.com/MatheusLucas01/DevLinks",
  //   },
  // },
  // {
  //   img: projeto6,
  //   title: "Projeto 1",
  //   desciption: "Lista de Tarefas Simples, feita 100% em Python",
  //   links: {
  //     site: "https://matheuslucas01.github.io/DevLinks/",
  //     github: "https://github.com/MatheusLucas01/DevLinks",
  //   },
  // },
];
const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">
        Portfolio
      </h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
          </div>

            <div className="w-full md:w-1/2 p-2">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-slate-500/20"
              />

            <div className="w-full md:w-1/2 p-2 ">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg hover:bg-black"
              />
            </div>

            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center ">
              <h3 className="text-2xl font-bold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="p-4 py-2 bg-sky-800/20 text-gray-200 rounded-lg hover:bg-sky-900 transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="p-4 py-2 bg-sky-800/20 text-gray-200 rounded-lg hover:bg-sky-900 transition duration-300"
                >
                  <FaGithub />
                </a>

                {/* PROJETO 1 */}
                {project.links.linguagens_projeto1 && (
                  <div className="flex gap-2 text-3xl"> 
                    <p>
                    <DiPython className="text-5xl text-yellow-400 mx-2 animate-pulse" />
                    </p>
                  </div>
                )}

                {/* PROJETO 2 */}
                {project.links.linguagens_projeto2 && (
                  <div className="flex gap-2 text-3xl"> 
                    <p>
                    <DiHtml5 className="text-5xl text-red-500 mx-2 animate-pulse" />
                    </p>
                    <p>
                    <DiCss3 className="text-5xl text-blue-500 mx-2 animate-pulse" />
                    </p>
                    <p>
                    <DiJavascript1 className="text-5xl text-yellow-400 mx-2 animate-pulse" />
                    </p>
                  </div>
                )}

                {/* PROJETO 3 */}
                {project.links.linguagens_projeto3 && (
                  <div className="flex gap-2 text-3xl"> 
                    <p>
                    <DiReact className="text-5xl text-blue-400 mx-2 animate-pulse" />
                    </p>
                    <p>
                    <DiCss3 className="text-5xl text-blue-500 mx-2 animate-pulse" />
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
