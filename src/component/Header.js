import React from 'react';

const Header = () => {
  return (
    <div
      classNameName="header-container"
      style={{ backgroundColor: '#08387f' }}
    >
      <nav className="navbar navbar-expand-lg ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ marginLeft: '20px' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Academics
              </a>

              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Schools
                </a>
                <a className="dropdown-item" href="#">
                  Academic calender
                </a>
                <a className="dropdown-item" href="#">
                  Time Table
                </a>
                <a className="dropdown-item" href="#">
                  Community College
                </a>
                <a className="dropdown-item" href="#">
                  Centre For Happiness
                </a>
                <a className="dropdown-item" href="#">
                  Ethics Committee
                </a>
                <a className="dropdown-item" href="#">
                  Faculty Recharge
                </a>
                <a className="dropdown-item" href="#">
                  Institutional Biosafety Committee
                </a>
                <a className="dropdown-item" href="#">
                  Research scholars
                </a>
                <a className="dropdown-item" href="#">
                  Journal Of Media And Communication
                </a>
                <a className="dropdown-item" href="#">
                  MHRD - Institution Innovation Council
                </a>
                <a className="dropdown-item" href="#">
                  Project Cell
                </a>
                <a className="dropdown-item" href="#">
                  Service Cell
                </a>
                <a className="dropdown-item" href="#">
                  SC And ST Cell
                </a>
                <a className="dropdown-item" href="#">
                  OBC Cell
                </a>
                <a className="dropdown-item" href="#">
                  EOC Cell
                </a>
                <a className="dropdown-item" href="#">
                  UGC STRIDE PROGRAMS
                </a>
                <a className="dropdown-item" href="#">
                  Research Guidelines
                </a>
                <a className="dropdown-item" href="#">
                  Dr.Ambedkar Centre Of Ecellence
                </a>
                <a className="dropdown-item" href="#">
                  Enabling Unit
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Administration
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Schools
                </a>
                <a className="dropdown-item" href="#">
                  Academic calender
                </a>
                <a className="dropdown-item" href="#">
                  Time Table
                </a>
                <a className="dropdown-item" href="#">
                  Community College
                </a>
                <a className="dropdown-item" href="#">
                  Centre For Happiness
                </a>
                <a className="dropdown-item" href="#">
                  Ethics Committee
                </a>
                <a className="dropdown-item" href="#">
                  Faculty Recharge
                </a>
                <a className="dropdown-item" href="#">
                  Institutional Biosafety Committee
                </a>
                <a className="dropdown-item" href="#">
                  Research scholars
                </a>
                <a className="dropdown-item" href="#">
                  Journal Of Media And Communication
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Exams
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tenders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Facilities
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                IQAC
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                NRF
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Quick Links
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
