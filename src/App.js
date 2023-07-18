import "./App.css";
import "./index.css";
import "./Saly-10.png";

function App() {
  return (
    <body class="font-[Montserrat] text-white bg-[#0F141C] w-full">
      <div
        id="nav"
        class="hidden md:flex m-auto p-8 text-xl items-center justify-end gap-16 w-full "
      >
        <a
          href="#about"
          class="text-white/60 hover:text-white transition-all ease-in-out duration-500 p-4"
        >
          About
        </a>
        <a
          href="SHIBIN_T A.pdf"
          target="_blank"
          class="text-white/60 hover:text-white transition-all ease-in-out duration-500 p-4"
        >
          Resume
        </a>
        <a
          href="#projects"
          class="text-white/60 hover:text-white transition-all ease-in-out duration-500 p-4"
        >
          Projects
        </a>
        <a
          href="#contact"
          class="text-white/60 hover:text-white transition-all ease-in-out duration-500 p-4"
        >
          Contact
        </a>
      </div>
      <div class="w-full" id="home">
        <div class="m-auto w-full md:w-[70%] md:flex-row justify-center items-center gap-16 flex flex-col-reverse  mt-[5%]">
          <div>
            <div class="flex items-end justify-center">
              <div>
                <h1 class="text-[2rem] md:text-[3rem]  grad text font-bold">
                  Hi I am
                </h1>
                <h2 class="text-[4rem] md:text-[5rem] -mt-6 grad2 font-bold">
                  Shibin
                </h2>
              </div>
            </div>
            <p class=" text-md md:text-lg text-slate-500 text-left">
              Dev & Tech Enthusiast
            </p>
          </div>
          <img
            class="w-[20rem] rounded-full grayscale hover:filter-none transition-all duration-500 ease-in-out"
            src={require("./Saly-10.png")}
          ></img>
        </div>
      </div>
    </body>
  );
}

export default App;
