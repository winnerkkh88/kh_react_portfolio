import React from "react";
import {
    Router,
    Route,
    Link,
    Switch,
    useHistory,
    useLocation,
} from "react-router-dom";
import "./css/MainIndex.css";
import "./css/animate.css";
import { MdEmail, MdPhone, MdBookmark } from "react-icons/md";
import { FaBullhorn, FaPhoneSquare } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import About from "../pages/About";
import Home from "../pages/Home";
import ContactMe from "../pages/ContactMe";
import ReactPortfolio from "../pages/ReactPortfolio";
import MovieList from "../pages/portfolio/MovieList";
import MembershipManagement from "../pages/portfolio/MembershipManagement";
import MemberDetail from "./portfolio/MembershipManagement/IndividualComponentDesgin/MemberDetail";

function MainIndex({ isRoutingMoveDown, UseScreenLiveWidth }) {
    UseScreenLiveWidth();
    const history = useHistory();
    const location = useLocation();

    return (
        <>
            <Router history={history} location={location}>
                <nav
                    id="mainNav"
                    className="navbar navbar-expand-md navbar-dark fixed-top bg-dark opacity-0_8"
                >
                    <Link className="navbar-brand" to="/" style={{ zIndex: 1 }}>
                        KH React.js Portfolio
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={isRoutingMoveDown}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        id="navDropDownList"
                        className="container-fluid bg-dark"
                        style={{
                            paddingLeft: "8px",
                        }}
                    >
                        <div
                            className="collapse navbar-collapse"
                            id="navbarCollapse"
                        >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        <div className="hover_wrapper">
                                            <IoIosHome /> HOME
                                        </div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/About">
                                        <div className="hover_wrapper">
                                            <FaBullhorn /> ABOUT ME
                                        </div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ContactMe">
                                        <div className="hover_wrapper">
                                            <FaPhoneSquare /> CONTACT
                                        </div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/ReactPortfolio"
                                    >
                                        <div className="hover_wrapper">
                                            <MdBookmark /> REACT PORTFOLIO
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div id="routing">
                    <Switch>
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/About" exact={true} component={About} />
                        <Route
                            path="/ContactMe"
                            exact={true}
                            component={ContactMe}
                        />
                        <Route
                            path="/ReactPortfolio"
                            exact={true}
                            component={ReactPortfolio}
                        />
                        <Route
                            path="/portfolio/MovieListTop20"
                            exact={true}
                            component={MovieList}
                        />
                        <Route
                            path="/portfolio/MembershipManagement"
                            exact={true}
                            component={MembershipManagement}
                        />
                        <Route
                            path="/memberDetail/:id"
                            exact={true}
                            component={MemberDetail}
                        />
                    </Switch>
                </div>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <span className="text-muted col-sm-4">
                                KH React.js website @ {new Date().getFullYear()}
                            </span>
                            <span className="text-muted col-sm-4">
                                <MdEmail /> winnerkkh88@gmail.com
                            </span>
                            <span className="text-muted col-sm-4">
                                <MdPhone /> +1-647-907-7725
                            </span>
                        </div>
                    </div>
                </footer>
            </Router>
        </>
    );
}

export default MainIndex;
