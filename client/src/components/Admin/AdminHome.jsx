import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import background3 from "../ImagesFol/background4.png";
import "./AdminHome.css";
const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // Check if the user is logged in on component mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if username and password match
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setLoggedIn(false);
  };

  return (
    <div className="admin-container mt-5">
      <div className="admin-dashboard">
        <div className="admin-nav"></div>
        <div className="admin-display" style={{ backgroundImage: background3 }}>
          {/* Only display login form if not logged in */}
          <div className="admin-signin">
            <div className="adminsignin-background">
              {!loggedIn && (
                <form onSubmit={handleLogin}>
                  <div className="admin-log mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="admin-log mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="admin-btn btn-primary">
                    Login
                  </button>
                </form>
              )}
            </div>
          </div>
          {/* Only display admin home page if logged in */}
          <div className="admin-login">
            {loggedIn && (
              <div className="admin-displaycontainer">
                <h1 id="admin-welcometitle">Welcome to Admin Panel</h1>
                <p id="admin-detailsubtitle">Manage users and cars here.</p>
                <div className="adminbtns col mt-3">
                  <div className="col-md-5">
                  </div>
                  <div className="col-md-5">
                    <div id="overallcar">
                      <p className="admincar-caption">Manage the cars?</p>
                      <div id="managecarbtn">
                        <Link to="/cars" className="btn btn-success btn-block">
                          Manage Cars
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div id="overalldriver">
                      <p className="admindriver-caption">Manage the Drivers?</p>
                      <div id="managedriverbtn">
                        <Link to="/drivers" className="btn btn-success btn-block">
                          Manage Drivers
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <p id="logout-caption">
                  If you wish to logout <br />
                  please click the red button
                </p>
                <div className="adminlogoutbtn">
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
