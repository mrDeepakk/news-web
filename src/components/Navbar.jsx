import React from "react";
function Navbar({ setCategory }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark-subtle">
      <div className="container-fluid">
        <a className="navbar-brand fs-4" href="/">
          <span className="badge bg-secondary p-2">News</span>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div
                className="nav-link"
                aria-current="page"
                onClick={() => setCategory("technology")}
              >
                Technology
              </div>
            </li>

            <li className="nav-item">
              <div
                className="nav-link "
                aria-current="page"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link "
                aria-current="page"
                onClick={() => setCategory("science")}
              >
                Science
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link "
                aria-current="page"
                onClick={() => setCategory("sports")}
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link "
                aria-current="page"
                onClick={() => setCategory("business")}
              >
                Business
              </div>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
