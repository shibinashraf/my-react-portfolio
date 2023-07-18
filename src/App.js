import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./Saly-10.png";
function App() {
  return (
    <div class="main">
      <nav id="nav" class="navbar navbar-dark navbar-expand-lg">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Resume <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <button class="btn btn-warning" href="#">
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div id="home-content" class="row">
        <div id="home-page-title" class="col-8">
          <h1 id="hi"> Hi! I am </h1>
          <h1 id="name">Shibin</h1>
        </div>
        <div class="col-4">
          <img
            id="home-page-logo"
            src={require("./Saly-10.png")}
            class="img-fluid"
            alt="Responsive image"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default App;
