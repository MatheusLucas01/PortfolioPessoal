import projeto1 from "../assets/projeto1.png";
import projeto2 from "../assets/projeto2.png";
import projeto3 from "../assets/projeto3.png";
import projeto4 from "../assets/projeto4.png";
import projeto5 from "../assets/projeto5.png";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiPython,
  DiReact,
  DiWordpress,
  
} from "react-icons/di";
import Reveal from "./Reveal";
import { div } from "framer-motion/client";

const projects = [
  {
    img: projeto1,
    title: "Projeto #1 - Pessoal",
    description: "Lista de Tarefas Simples",
    links: {
      site: "http://listadetarefas.streamlit.app/",
      github: "https://github.com/MatheusLucas01/ListaDeTarefas",
      linguagens: [DiPython],
    },
  },
  {
    img: projeto2,
    title: "Projeto #2 - Pessoal",
    description:
      "DevLinks, landing page para apresentar os links das minhas redes de contato",
    links: {
      site: "https://matheuslucas01.github.io/DevLinks/",
      github: "https://github.com/MatheusLucas01/DevLinks",
      linguagens: [DiHtml5, DiCss3, DiJavascript1],
    },
  },
  {
    img: projeto3,
    title: "Projeto #3 - Pessoal",
    description: "Tela de Login",
    links: {
      site: "https://tela-login-azure.vercel.app/",
      github: "https://github.com/MatheusLucas01/Tela_Login",
      linguagens: [DiReact, DiCss3],
    },
  },
  {
    img: projeto4,
    title: "Projeto #4 - Institucional",
    description:
      "Avante, feito com Wordpress. \n Antes de conhecer a programação",
    links: {
      site: "https://avantesso.com.br/",
      linguagens: [DiWordpress],
    },
  },
  {
    img: projeto5,
    title: "Projeto #5 - Pessoal",
    description:
      "Meu portfolio pessoal. \n Feito para organização dos \nprojetos desenvolvidos",
    links: {
      site: "https://www.matheuscode.com.br/",
      github: "https://github.com/MatheusLucas01/PortfolioPessoal",
      linguagens: [DiReact, DiJavascript1, SiTailwindcss, DiCss3],
    },
  },
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
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-2">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-slate-500/20"
              />
            </div>

            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
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

                {/* Exibindo as linguagens */}
                {project.links.linguagens && (
                  <div className="flex gap-2 text-3xl">
                    {project.links.linguagens.map((LinguagemIcon, i) => (
                      <LinguagemIcon
                        key={i}
                        className={`text-5xl mx-2 animate-pulse ${
                          LinguagemIcon === DiPython
                            ? "text-blue-400"
                            : LinguagemIcon === DiHtml5
                            ? "text-orange-600"
                            : LinguagemIcon === DiCss3
                            ? "text-blue-600"
                            : LinguagemIcon === DiJavascript1
                            ? "text-yellow-400"
                            : LinguagemIcon === DiReact
                            ? "text-cyan-400"
                            : LinguagemIcon === DiNodejsSmall
                            ? "text-green-600"
                            : LinguagemIcon === DiWordpress
                            ? "text-blue-600"
                            : LinguagemIcon === SiTailwindcss
                            ? "text-green-600"
                            : ""
                        }`}
                      />
                    ))}
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