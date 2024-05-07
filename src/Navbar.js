import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="UberHari/" className="navbar-brand">
            Uber Hari Cost Proposal
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className=" nav-item">
                <Link to="UberHari/" className="nav-link">
                  New Entry
                </Link>
              </li>
              <li className="nav-item">
                <Link to="UberHari/list" className="nav-link">
                  List of Entries
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
