import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  // Estado para controlar a visibilidade do menu
  const [nav, setNav] = useState(false);

  // Função para alternar a visibilidade do menu
  const toggleNav = () => {
    setNav(!nav);
  };

  // Função para fechar o menu
  const closeNav = () => {
    setNav(false);
  };

  // Variantes de animação para o menu
  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    // Definir a posição fechada do menu
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto flex justify-between text-gray-300 text-xl items-center px-12 h-20">
        <a href="#">Matheus Lucas</a>

        <ul className="hidden md:flex z-10 cursor-pointer gap-12">
          <li>
            <Link to="skills" smooth={true} offset={50} duration={500}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} offset={50} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contato" smooth={true} offset={50} duration={500}>
              Contato
            </Link>
          </li>
        </ul>

        <div onClick={toggleNav} className="md:hidden z-30 text-gray-200">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full h-full min-h-screen bg-gray-900 z-40"
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center cursor-pointer">
            <li>
              <Link
                to="skills"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:text-blue-400"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:text-blue-400"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="contato"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:text-blue-400"
              >
                Contato
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
