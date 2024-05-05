import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // Check if the user is logged in on component mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if username and password match
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setLoggedIn(false);
  };

  return (
    <div className="container mt-5">
      {/* Only display login form if not logged in */}
      {!loggedIn && (
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      )}

      {/* Only display admin home page if logged in */}
      {loggedIn && (
        <div>
          <h1>Welcome to Admin Panel</h1>
          <p>Manage users and cars here.</p>
          <div className="row mt-3">
            <div className="col-md-6">
              <Link to="/user" className="btn btn-primary btn-block">Manage Users</Link>
            </div>
            <div className="col-md-6">
              <Link to="/cars" className="btn btn-success btn-block">Manage Cars</Link>
            </div>
          </div>
          <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  )
}

export default Home;
