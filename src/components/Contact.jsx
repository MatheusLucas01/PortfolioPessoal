import Reveal from "./Reveal"; // Adjust the path as necessary

function Contact() {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                Sobre <span> mim </span>{" "}
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis quam atque perferendis reprehenderit animi magni
                accusamus, alias illo deserunt deleniti consectetur eligendi, id
                reiciendis voluptatum unde ea recusandae sequi tempora.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7 ">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  11
                  <span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span> Projetos</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  1<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>ano de experiência</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  30
                  <span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span> Clientes felizes</span>
                </p>
              </div>
            </div>
          </div>

          <form
            action="https://getform.io/f/adrnnqxa" // Criado no getform.io
            method="POST"
            className="max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Vamos nos conectar!
            </p>

            <input
              type="text"
              id="nome"
              placeholder="Seu nome..."
              name="nome"
              className="mb-2 w-full rounded-md border border-blue-600 py-2 pl-2 pr-4"
            />

            <input
              type="email"
              id="email"
              placeholder="Seu E-mail..."
              name="email"
              className="mb-2 w-full rounded-md border border-blue-600 py-2 pl-2 pr-4"
            />

            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Sua mensagem..."
              className="mb-2 w-full rounded-md border border-blue-600 py-2 pl-2 pr-4"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
}

export default Contact;
