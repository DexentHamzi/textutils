import React from "react";

function navbar(props) {
  return (
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              {/* <li className="nav-item">
              <a className="nav-link" href="./About">
                About
              </a>
            </li> */}
            </ul>

            <div className="w3-half w3-center" onClick={() => props.bgToggle('#d6cbd3')}>
              <p></p>
            </div>
            <div className="w3-half1 w3-center mx-2" onClick={() => props.bgToggle('#9D80BA')}>
              <p></p>
            </div>
            <div className="w3-half2 w3-center" onClick={() => props.bgToggle('#A5B2AA')}>
              <p></p>
            </div>

            <div
              className={`form-check form-switch mx-3 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.textButton}
              </label>
            </div>

            {/* <form className="d-flex">
            <input
              style={{
                backgroundColor: props.mode === "light" ? "#f8f9fa" : "#343a40",
                color: props.mode === "light" ? "#343a40" : "#f8f9fa",
              }}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          </div>
        </div>
      </nav>
  
  );
}

export default navbar;
