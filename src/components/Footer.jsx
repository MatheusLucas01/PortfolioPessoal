import { FaGithubSquare, FaInstagram } from "react-icons/fa";

const footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl text-blue-500 font-semibold">Matheus Lucas</h3>
        <div className=" flex flew-row gap-6 text-blue-200 text-4xl">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaGithubSquare />
          </a>
        </div>
      </div>

      <p className="text-gray-400">@2025 Matheus Lucas 😁</p>
    </div>
  );
};

export default footer;
