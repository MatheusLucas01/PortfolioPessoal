import profile from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import Effects from "./Effects";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiPython,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Fullstack Dev",
              1000,
              "Webdesigner",
              1000,
              "Consultant",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-4xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            Olá, eu sou <br />
            <span className="text-blue-500">Matheus Lucas</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          ></motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.8)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-sky-900 rounded-xl"
            >
              <a href="/CV_Matheus_Lucas.pdf" download="CV_Matheus_Lucas.pdf">
                Download CV
              </a>
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-5xl text-blue-200 z-20">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/MatheusLucas01"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/?hl=en"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiOutlineInstagram />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com/in/matheussouza1s"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiOutlineLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profile}
          className="w-[300px] md:w-[450px] border-4 border-sky-900 rounded-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 mr-6">My Tech Stack</p>
        <DiHtml5 className="text-5xl text-orange-600 mx-2 animate-bounce" />
        <DiCss3 className="text-5xl text-blue-600 mx-2 animate-bounce" />
        <DiJavascript1 className="text-5xl text-yellow-400 mx-2 animate-bounce" />
        <DiReact className="text-5xl text-blue-400 mx-2 animate-bounce" />
        <DiNodejsSmall className="text-5xl text-green-400 mx-2 animate-bounce" />
        <DiPython className="text-5xl text-blue-400 mx-2 animate-bounce" />
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <Effects left={0} top={0} size={1200} />
      </div>
    </div>
  );
};

export default Hero;
