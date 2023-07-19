import "./App.css";
import "./index.css";
import logo from "./Saly-10.png";

function App() {
  return (
    <body class="gradient-dark">
      <ul class="font-style flex flex-row-reverse	items-center gap-x-12 py-8 px-12 text-slate-50	text-2xl ">
        <li>
          <button class="py-2 px-4 bg-yellow-500 text-white font-semibold rounded-2xl shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Contact Me
          </button>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
      </ul>
      <div class="flex flex-row">
        <div class="basis-3/4 items-center mx-40 my-40">
          <div class="flex-column">
            <h1 class="text-green-300 text-6xl">Hi! I am</h1>
            <h1 class="text-slate-300 text-8xl">Shibin</h1>
          </div>
        </div>
        <div class="basis-1/2 items-center mx-40 my-30">
          <img src={logo} alt="Logo" />;
        </div>
      </div>
    </body>
  );
}

export default App;
